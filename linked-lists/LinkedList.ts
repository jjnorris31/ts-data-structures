import LinkedListInterface from './LinkedListInterface';
import LinkedListNode from './LinkedListNode';

class LinkedList<T> implements LinkedListInterface<T> {

    private head: LinkedListNode<T> | null = new LinkedListNode<T>();
    private numberOfEntries: number = 0;

    add(content: T): void {
        if (this.isEmpty()) {
            this.head = new LinkedListNode<T>();
            this.head.setContent(content);
            this.head.setNext(null);
        } else {
            let auxLinkedListNode = new LinkedListNode<T>();
            auxLinkedListNode.setContent(content);
            auxLinkedListNode.setNext(this.head);
            this.head = auxLinkedListNode;
        }
        this.numberOfEntries++;
    }

    addAt(position: number, content: T) {
        if (position < 1) {
            this.add(content);
        } else {
            let previousNode = this.getNodeAt(position - 1);
            let newNode = new LinkedListNode<T>();
            newNode.setContent(content);
            newNode.setNext(previousNode.getNext());
            previousNode.setNext(newNode);
            this.numberOfEntries++;
        }
    }

    size(): number {
        return this.numberOfEntries;
    }

    remove(position: number): void {
        let previousNode = this.getNodeAt(position - 1);
        let nodeToDelete = previousNode.getNext();
        previousNode.setNext(nodeToDelete.getNext());
        this.numberOfEntries--;
    }

    replace(content: T, position: number): void {
        let previousNode = this.getNodeAt(position - 1);
        let nodeToReplace = previousNode.getNext();
        let newNode = new LinkedListNode<T>();
        newNode.setContent(content);
        newNode.setNext(nodeToReplace.getNext());
        previousNode.setNext(newNode);
    }

    getEntry(position: number): T {
        return this.getNodeAt(position).getContent();
    }

    getNodeAt(position: number): LinkedListNode<T> {
        if (position < this.numberOfEntries) {
            let auxNode = this.head;
            for (let i = 0; i < position; i++) {
                auxNode = auxNode.getNext();
            }
            return auxNode;
        } else {
            throw new Error("Cannot get an entry at this position");
        }
    }

    toArray(): T[] {
        let linkedArray = new Array<T>();
        let currentNode = this.head;
        for (let i = 0; i < this.numberOfEntries; i++) {
            linkedArray.push(currentNode.getContent());
            currentNode = currentNode.getNext();
        }
        return linkedArray;
    }

    public isEmpty(): boolean {
        return this.numberOfEntries === 0;
    }

    public clear(): void {
        this.head = null;
        this.numberOfEntries = 0;
    }

}

export default LinkedList;