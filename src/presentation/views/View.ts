export class View {
    render(data: any): string {
        // Implement rendering logic here
        return JSON.stringify(data);
    }

    formatResponse(data: any): any {
        // Implement response formatting logic here
        return {
            status: 'success',
            data: data
        };
    }
}