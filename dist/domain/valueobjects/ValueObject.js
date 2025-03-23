"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(value) {
        this._value = value;
        this.validate();
    }
    validate() {
        // Implement validation logic here
    }
    equals(other) {
        if (other === null || other === undefined) {
            return false;
        }
        return JSON.stringify(this._value) === JSON.stringify(other._value);
    }
    get value() {
        return this._value;
    }
}
exports.ValueObject = ValueObject;
