"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor() {
        this.config = {};
    }
    load(config) {
        this.config = Object.assign(Object.assign({}, this.config), config);
    }
    get(key) {
        return this.config[key];
    }
    has(key) {
        return key in this.config;
    }
}
exports.Config = Config;
