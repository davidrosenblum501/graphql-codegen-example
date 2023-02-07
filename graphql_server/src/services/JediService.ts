import { Context } from '../context/Context';
import JediExternal, { Jedi, JediInsert, JediUpdate } from '../external/JediExternal';

export type { Jedi };

export interface JediPaginated {
  count: number;
  pages: number;
  jedi: Jedi[];
}

const getById = async(
  _context: Context,
  id: number
): Promise<Jedi | undefined> => {
  return JediExternal.selectById(id);
};

const getPaginated = async(
  _context: Context,
  page?: number,
  pageSize?: number
): Promise<JediPaginated> => {
  const limit = Math.min(pageSize ?? 10, 100);
  const offset = (page ?? 0) * limit;
  const [count, jedi] = await Promise.all([
    JediExternal.selectCount(),
    JediExternal.selectPaginated(limit, offset),
  ]);
  const jediPaginated: JediPaginated = {
    count,
    pages: Math.ceil(count / limit),
    jedi,
  };
  return jediPaginated;
};

const create = async (
  context: Context,
  data: JediInsert
): Promise<Jedi> => {
  const padawan = data.padawanId
    ? await getById(context, data.padawanId)
    : undefined;
  
  if (data.padawanId && !padawan) {
    throw new Error('Padawan not found');
  }

  const id = await JediExternal.insert(data);
  const jedi: Jedi = { ...data, id };
  return jedi;
};

const update = async (
  context: Context,
  id: number,
  data: JediUpdate
): Promise<boolean> => {
  const jedi = await getById(context, id);

  if (!jedi) {
    throw new Error('Jedi not found');
  }

  return JediExternal.update(id, data);
};

const del = async (
  context: Context,
  id: number
): Promise<boolean> => {
  const jedi = await getById(context, id);

  if (!jedi) {
    throw new Error('Jedi not found');
  }

  return JediExternal.del(id);
};

const isJedi = (value: unknown): value is Jedi => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  return typeof (value as Record<string, unknown>).lightsaberColor === 'string';
};

export default {
  getById,
  getPaginated,
  create,
  update,
  del,
  isJedi,
};