import { Context } from '../context/Context';
import { CloneTrooper } from '../external/CloneTrooperExternal';
import { Jedi } from '../external/JediExternal';
import CloneTrooperService from './CloneTrooperService';
import JediService from './JediService';

export type { CloneTrooper, Jedi };

export type RepublicUnit = Jedi | CloneTrooper;

export interface RepublicUnits {
  jedi: Jedi[];
  cloneTroopers: CloneTrooper[];
}

const getMany = async (
  context: Context
): Promise<RepublicUnits> => {
  const page = 0;
  const pageSize = 100;
  const pageSizeHalf = Math.ceil(pageSize / 2);

  const [jediPaginated, cloneTroopersPaginated] = await Promise.all([
    JediService.getPaginated(context, page, pageSizeHalf),
    CloneTrooperService.getPaginated(context, page, pageSizeHalf),
  ]);

  const republicUnits: RepublicUnits = {
    jedi: jediPaginated.jedi,
    cloneTroopers: cloneTroopersPaginated.cloneTroopers,
  };
  return republicUnits;
};

export default {
  getMany,
};