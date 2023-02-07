export interface CloneTrooper {
  id: number;
  name: string;
  corps: string;
}

const cloneTrooperStore = new Map<number, CloneTrooper>([
  [2224, {
    id: 2224,
    name: 'Commander Cody',
    corps: '7th Sky Corps',
  }],
  [1138, {
    id: 2,
    name: 'Commander Bacara',
    corps: '21st Nova Corps',
  }],
  [5052, {
    id: 5052,
    name: 'Commander Bly',
    corps: '327th Star Corps',
  }],
  [1004, {
    id: 1004,
    name: 'Commander Gree',
    corps: '41st Elite Corps',
  }],
  [8826, {
    id: 8826,
    name: 'Commander Neyo',
    corps: '91st Mobile Reconnaissance Corps',
  }],
]);

const selectById = async (
  id: number
): Promise<CloneTrooper | undefined> => {
  return cloneTrooperStore.get(id);
};

const selectManyByIds = async (
  ids: number[]
): Promise<CloneTrooper[]> => {
  return ids
    .map(cloneTrooperStore.get)
    .filter((row): row is CloneTrooper => !!row);
};

const selectPaginated = async (
  limit: number,
  offset: number
): Promise<CloneTrooper[]> => {
   const startIndex = offset;
    const endIndex = offset + limit;
    const values = Array.from(cloneTrooperStore.values());
    return values.slice(startIndex, endIndex);
};

const selectCount = async (): Promise<number> => {
  return cloneTrooperStore.size;
};

export default {
  selectById,
  selectManyByIds,
  selectPaginated,
  selectCount,
};