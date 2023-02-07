import { Context } from '../context/Context';
import CloneTrooperExternal, { CloneTrooper } from '../external/CloneTrooperExternal';

export type { CloneTrooper };

export interface CloneTroopersPaginated {
  count: number;
  pages: number;
  cloneTroopers: CloneTrooper[];
}

const getById = (
  _context: Context,
  id: number
): Promise<CloneTrooper | undefined> => {
  return CloneTrooperExternal.selectById(id);
};

const getPaginated = async (
  _context: Context,
  page?: number,
  pageSize?: number
): Promise<CloneTroopersPaginated> => {
  const limit = Math.min(pageSize ?? 10, 100);
  const offset = (page ?? 0) * limit;
  const [count, cloneTroopers] = await Promise.all([
    CloneTrooperExternal.selectCount(),
    CloneTrooperExternal.selectPaginated(limit, offset),
  ]);
  const cloneTroopersPaginated: CloneTroopersPaginated = {
    count,
    pages: Math.ceil(count / limit),
    cloneTroopers,
  };
  return cloneTroopersPaginated;
};

export default {
  getById,
  getPaginated,
};