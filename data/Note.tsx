export class Note {
    id: string;
    content: string;
    whenCreated: string;

    constructor(id: string, content: string, whenCreated: string) {
        this.id = id;
        this.content = content;
        this.whenCreated = whenCreated;
    }
}