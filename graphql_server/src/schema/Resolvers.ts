import * as codegen from '../codegen';
import { Context } from '../context/Context';
import JediService from '../services/JediService';
import RepublicUnitService from '../services/RepublicUnitService';
import Transformers from './Transformers';

const Resolvers: codegen.Resolvers<Context> = {
  Query: {
    jedi: async (_parent, args, context) => {
      const { id } = args;
      const jedi = await JediService.getById(context, id);
      if (!jedi) {
        return null;
      }
      return Transformers.transformJedi(jedi);
    },
    jediPaginated: async (_parent, args, context) => {
      const page = args.page ?? undefined;
      const pageSize = args.pageSize ?? undefined;
      const jediPaginated = await JediService.getPaginated(context, page, pageSize);
      return Transformers.transformJediPaginated(jediPaginated);
    },
    republicUnits: async (_parent, _args, context) => {
      const republicUnits = await RepublicUnitService.getMany(context);
      return Transformers.transformRepublicUnits(republicUnits);
    },
  },
  Mutation: {
    createJedi: async (_parent, args, context) => {
      const { input } = args;
      const insertData = Transformers.transformJediInput(input);
      const jedi = await JediService.create(context, insertData);
      return Transformers.transformJedi(jedi);
    },
    updateJedi: async (_parent, args, context) => {
      const { id, update } = args;
      const updateData = Transformers.transformJediUpdateInput(update);
      return JediService.update(context, id, updateData);
    },
    deleteJedi: async (_parent, args, context) => {
      const { id } = args;
      return JediService.del(context, id);
    },
  },
  Jedi: {
    padawan: async (parent, _args, context) => {
      // Data loader candidate because of array response
      const { padawanId } = parent;
      if (!padawanId) {
        return null;
      }
      const jedi = await JediService.getById(context, padawanId);
      if (!jedi) {
        return null;
      }
      return Transformers.transformJedi(jedi);
    },
  },
  RepublicUnit: {
    __resolveType: (parent) => {
      if (JediService.isJedi(parent)) {
        return 'Jedi';
      }
      return 'CloneTrooper';
    },
  },
};

export default Resolvers;