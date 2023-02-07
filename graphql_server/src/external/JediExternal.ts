export enum JediLightsaberColor {
  BLUE = 'blue',
  GREEN = 'green',
  PURPLE = 'purple',
}

export enum JediRank {
  PADAWAN = 'padawan',
  KNIGHT = 'knight',
  MASTER = 'master',
}

export interface Jedi {
  id: number;
  name: string;
  lightsaberColor: JediLightsaberColor;
  rank: JediRank;
  padawanId: number | null;
}

export type JediInsert = Omit<Jedi, 'id'>;

export type JediUpdate = Partial<Omit<Jedi, 'id'>>;

const jediStore = new Map<number, Jedi>([
  [1, {
    id: 1,
    name: 'Obi-Wan Kenboi',
    lightsaberColor: JediLightsaberColor.BLUE,
    rank: JediRank.MASTER,
    padawanId: null,
  }],
  [2, {
    id: 2,
    name: 'Anakin Skywalker',
    lightsaberColor: JediLightsaberColor.BLUE,
    rank: JediRank.KNIGHT,
    padawanId: null,
  }],
  [3, {
    id: 3,
    name: 'Mace Windu',
    lightsaberColor: JediLightsaberColor.PURPLE,
    rank: JediRank.MASTER,
    padawanId: null,
  }],
  [4, {
    id: 4,
    name: 'Yoda',
    lightsaberColor: JediLightsaberColor.GREEN,
    rank: JediRank.MASTER,
    padawanId: null,
  }],
  [5, {
    id: 5,
    name: 'Ahsoka Tano',
    lightsaberColor: JediLightsaberColor.GREEN,
    rank: JediRank.PADAWAN,
    padawanId: null,
  }],
]);
let lastId = jediStore.size;

const selectById = async (
  id: number
): Promise<Jedi | undefined> => {
  return jediStore.get(id);
};

const selectManyByIds = async (
  ids: number[]
): Promise<Jedi[]> => {
  return ids
    .map(jediStore.get)
    .filter((row): row is Jedi => !!row);
};

const selectPaginated = async (
  limit: number,
  offset: number
): Promise<Jedi[]> => {
  const startIndex = offset;
  const endIndex = offset + limit;
  const values = Array.from(jediStore.values());
  return values.slice(startIndex, endIndex);
};

const selectCount = async (): Promise<number> => {
  return jediStore.size;
};

const insert = async (
  data: JediInsert
): Promise<number> => {
  const id = ++lastId;
  const jedi: Jedi = { ...data, id };
  jediStore.set(id, jedi);
  return id;
};

const update = async (
  id: number,
  data: JediUpdate
): Promise<boolean> => {
  const jedi = jediStore.get(id);

  if (!jedi) {
    return false;
  }

  const jediUpdate: Jedi = { ...jedi, ...data };
  jediStore.set(id, jediUpdate);
  return true;
};

const del = async (
  id: number
): Promise<boolean> => {
  return jediStore.delete(id);
};

export default {
  selectById,
  selectManyByIds,
  selectPaginated,
  selectCount,
  insert,
  update,
  del,
};