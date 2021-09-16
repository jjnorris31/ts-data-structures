export default class UnsupportedOperationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UnsupportedOperationError";
    }
}