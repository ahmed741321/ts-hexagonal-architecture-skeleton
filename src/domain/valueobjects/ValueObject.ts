export class ValueObject {
    protected readonly _value: any;

    constructor(value: any) {
        this._value = value;
        this.validate();
    }

    protected validate(): void {
        // Implement validation logic here
    }

    public equals(other: ValueObject): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        return JSON.stringify(this._value) === JSON.stringify(other._value);
    }

    public get value(): any {
        return this._value;
    }
}