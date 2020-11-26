export class Todo {
    constructor(
        public texto: string,
        public id?: number,
        public completado?: boolean
    ) {
        this.id = Math.random();
        this.completado = false;
    }
}