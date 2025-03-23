import { Entity } from "../../domain/entities/Entity";
import { RepositoryInterface } from "../../domain/repositories/RepositoryInterface";

export class RepositoryImplementation implements RepositoryInterface<Entity> {
  private data: Map<string, Entity> = new Map();

  async findById(id: string): Promise<Entity | null> {
    return this.data.get(id) || null;
  }

  async save(entity: Entity): Promise<void> {
    this.data.set(entity.getId(), entity);
  }

  async delete(id: string): Promise<void> {
    this.data.delete(id);
  }
  async findAll(): Promise<Entity[]> {
    return Array.from(this.data.values());
  }

  // Additional methods for data access and persistence can be added here
}
