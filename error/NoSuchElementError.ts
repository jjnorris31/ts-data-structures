export default class NoSuchElementError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NoSuchElementError";
    }
}