export default class Node<T> {

    public next: Node<T> | null;
    private content: T | null;

    public constructor(node: Partial<Node<T>> = {}) {
        Object.assign(this, node);
    }

    getNext(): Node<T> {
        return this.next;
    }

    setNext(next: Node<T>): void {
        this.next = next;
    }

    getContent(): T {
        return this.content;
    }

    setContent(content: T) {
        this.content = content;
    }
}