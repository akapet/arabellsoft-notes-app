export class Note {
    id: string;
    note: string;
    whenCreated: string;

    constructor(id: string, note: string, whenCreated: string) {
        this.id = id;
        this.note = note;
        this.whenCreated = whenCreated;
    }
}