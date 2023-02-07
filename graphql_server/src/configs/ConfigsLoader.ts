class ConfigsLoader {
  #store: Record<string, string | undefined>;
  #missing: string[];

  constructor(store: Record<string, string | undefined>) {
    this.#store = store;
    this.#missing = [];
  }

  getStringOptional(key: string): string | undefined {
    const value = this.#store[key];
    return value;
  }

  getStringRequired(key: string): string {
    const value = this.getStringOptional(key);
    if (!value) {
      this.#missing.push(key);
      return '';
    }
    return value;
  }

  getIntOptional(key: string): number | undefined {
    const value = this.getStringOptional(key);
    if (!value) {
      return undefined;
    }

    const valueParsed = Number.parseInt(value);
    if (Number.isNaN(valueParsed)) {
      return undefined;
    }
    return valueParsed;
  }

  getIntRequired(key: string): number {
    const value = this.getIntOptional(key);
    if (value === undefined) {
      this.#missing.push(key);
      return 0;
    }
    return value;
  }

  getMissing(): string[] {
    return this.#missing;
  }
}

export default ConfigsLoader;