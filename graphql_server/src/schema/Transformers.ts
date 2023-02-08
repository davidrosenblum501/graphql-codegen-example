import * as codegen from '../codegen';
import { CloneTrooper } from '../external/CloneTrooperExternal';
import { Jedi, JediInsert, JediLightsaberColor, JediRank, JediUpdate } from '../external/JediExternal';
import { JediPaginated } from '../services/JediService';
import { RepublicUnits } from '../services/RepublicUnitService';

const transformJediLightsaberColor = (color: JediLightsaberColor): codegen.JediLightsaberColor => {
  const colors: Record<JediLightsaberColor, codegen.JediLightsaberColor> = {
    [JediLightsaberColor.BLUE]: codegen.JediLightsaberColor.Blue,
    [JediLightsaberColor.GREEN]: codegen.JediLightsaberColor.Green,
    [JediLightsaberColor.PURPLE]: codegen.JediLightsaberColor.Purple,
  };
  return colors[color];
};

const transformJediLightsaberColorReverse = (color: codegen.JediLightsaberColor): JediLightsaberColor => {
  const colors: Record<codegen.JediLightsaberColor, JediLightsaberColor> = {
    [codegen.JediLightsaberColor.Blue]: JediLightsaberColor.BLUE,
    [codegen.JediLightsaberColor.Green]: JediLightsaberColor.GREEN,
    [codegen.JediLightsaberColor.Purple]: JediLightsaberColor.PURPLE,
  };
  return colors[color];
};

const transformJediRank = (rank: JediRank): codegen.JediRank => {
  const ranks: Record<JediRank, codegen.JediRank> = {
    [JediRank.PADAWAN]: codegen.JediRank.Padawan,
    [JediRank.KNIGHT]: codegen.JediRank.Knight,
    [JediRank.MASTER]: codegen.JediRank.Master,
  };
  return ranks[rank];
};

const transformJediRankReverse = (rank: codegen.JediRank): JediRank => {
  const ranks: Record<codegen.JediRank, JediRank> = {
    [codegen.JediRank.Padawan]: JediRank.PADAWAN,
    [codegen.JediRank.Knight]: JediRank.KNIGHT,
    [codegen.JediRank.Master]: JediRank.MASTER,
  };
  return ranks[rank];
};

const transformJediInput = (input: codegen.JediInput): JediInsert => ({
  name: input.name,
  lightsaberColor: transformJediLightsaberColorReverse(input.lightsaberColor),
  rank: transformJediRankReverse(input.rank),
  padawanId: input.pawadanId ?? null,
});

const transformJediUpdateInput = (input: codegen.JediUpdateInput): JediUpdate => ({
  name: input.name ?? undefined,
  lightsaberColor: input.lightsaberColor
    ? transformJediLightsaberColorReverse(input.lightsaberColor)
    : undefined,
  rank: input.rank
    ? transformJediRankReverse(input.rank)
    : undefined,
  padawanId: input.pawadanId ?? null,
});

const transformJedi = (jedi: Jedi): codegen.Jedi => ({
  id: jedi.id,
  name: jedi.name,
  lightsaberColor: transformJediLightsaberColor(jedi.lightsaberColor),
  rank: transformJediRank(jedi.rank),
  padawanId: jedi.padawanId,
  // Below are by field resolvers
  padawan: null,
});

const transformJediPaginated = (jediPaginated: JediPaginated): codegen.JediPaginated => ({
  count: jediPaginated.count,
  pages: jediPaginated.pages,
  jedi: jediPaginated.jedi.map(transformJedi),
});

const transformCloneTrooper = (cloneTrooper: CloneTrooper): codegen.CloneTrooper => ({
  id: cloneTrooper.id,
  name: cloneTrooper.name,
  corps: cloneTrooper.corps,
});

const transformRepublicUnits = (republicUnits: RepublicUnits): codegen.RepublicUnit[] => {
  const jedi: codegen.RepublicUnit[] = republicUnits.jedi.map(transformJedi);
  const cloneTroopers: codegen.RepublicUnit[] = republicUnits.cloneTroopers.map(transformCloneTrooper);
  return jedi.concat(cloneTroopers);
};

export default {
  transformJediLightsaberColor,
  transformJediLightsaberColorReverse,
  transformJediRank,
  transformJediRankReverse,
  transformJediInput,
  transformJediUpdateInput,
  transformJedi,
  transformJediPaginated,
  transformCloneTrooper,
  transformRepublicUnits,
};