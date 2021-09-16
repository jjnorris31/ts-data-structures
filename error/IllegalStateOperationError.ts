export default class IllegalStateOperationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IllegalStateOperationError";
    }
}