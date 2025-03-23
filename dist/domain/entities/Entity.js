"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    equals(entity) {
        if (!(entity instanceof Entity)) {
            return false;
        }
        return this.id === entity.getId();
    }
}
exports.Entity = Entity;
