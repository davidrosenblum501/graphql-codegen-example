export interface Context {
  user: null;
}

const createContext = async (): Promise<Context> => {
  return {
    user: null,
  };
};

export default createContext;