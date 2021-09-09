import LinkedListNode from "./LinkedListNode";

export default interface LinkedListInterface<T> {
    add(node: T): void
    addAt(position: number, content: T): void
    size(): number
    isEmpty(): boolean
    clear(): void
    remove(position: number): void
    replace(content: T, position: number): void
    getEntry(position: number): T
    getNodeAt(position: number): LinkedListNode<T>
    toArray(): Array<T>
}