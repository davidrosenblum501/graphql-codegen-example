import ConfigsLoader from './ConfigsLoader';

export interface Configs {
  port: number;
}

const loadConfigs = (): Configs => {
  const loader = new ConfigsLoader(process.env);

  const port = loader.getIntOptional('PORT') ?? 4000;

  const missing = loader.getMissing();
  if (missing.length) {
    throw new Error(`Configurations error: Missing ${missing.join(', ')}`);
  }

  return {
    port,
  };
};

export default loadConfigs;