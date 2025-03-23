export interface ServiceInterface {
    execute(...args: any[]): Promise<any>;
}