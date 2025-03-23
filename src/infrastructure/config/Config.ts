export class Config {
    private config: { [key: string]: any };

    constructor() {
        this.config = {};
    }

    load(config: { [key: string]: any }) {
        this.config = { ...this.config, ...config };
    }

    get(key: string): any {
        return this.config[key];
    }

    has(key: string): boolean {
        return key in this.config;
    }
}