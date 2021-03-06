import LinkedList from "../linked-list/LinkedList";
import LinkedListNode from "../linked-list/LinkedListNode";

test('should create a LinkedListNode instance', () => {
    const linkedListNode = new LinkedListNode<string>();
    expect(linkedListNode).toBeInstanceOf(LinkedListNode);
});

test('should add an entry', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['speakers', 'soup', 'apple']);
})

test('should add an entry at position 1 of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(1, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['speakers', 'mouse', 'soup', 'apple']);
});

test('should add an entry at the start of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(0, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['mouse', 'speakers', 'soup', 'apple']);
});

test('should add an entry at the end of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(3, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['speakers', 'soup', 'apple', 'mouse']);
});

test('should detect when the linked linked list is empty', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList.isEmpty()).toBeTruthy();
});

test('should detect when the linked linked list is not empty', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    expect(linkedList.isEmpty()).toBeFalsy();
});

test('should get an entry at given position in the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    expect(linkedList.getEntry(2)).toEqual("apple");
});

test('should delete an item from the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.remove(2);
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(["speakers", "soup"]);
});

test('should get the size of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    expect(linkedList.size()).toEqual(3);
});

test('should replace an entry of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.replace("tablet", 2);
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(["speakers", "soup", "tablet"]);
});

test('should create a linked list from an array', () => {
    const linkedList = new LinkedList<string>(["speakers", "soup"]);
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(["speakers", "soup"]);
});