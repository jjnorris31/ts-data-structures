class LinkedListNode<T> {
    public next: LinkedListNode<T> | null;
    content: T | null;

    getNext(): LinkedListNode<T> {
        return this.next;
    }

    setNext(next: LinkedListNode<T>): void {
        this.next = next;
    }

    getContent(): T {
        return this.content;
    }

    setContent(content: T) {
        this.content = content;
    }
}

export default LinkedListNode

