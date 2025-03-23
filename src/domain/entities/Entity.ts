export class Entity {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public equals(entity: Entity): boolean {
        if (!(entity instanceof Entity)) {
            return false;
        }
        return this.id === entity.getId();
    }
}