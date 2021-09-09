import { link } from "fs";
import LinkedList from "../linked-list/LinkedList";
import LinkedListNode from "../linked-list/LinkedListNode";

test('should create a LinkedListNode instance', () => {
    const linkedListNode = new LinkedListNode<string>();
    expect(linkedListNode).toBeInstanceOf(LinkedListNode);
});

// test('should add an entry at position 2 of the linked list', () => {
//     const linkedList = new LinkedList<string>();
//     linkedList.add("speakers");
//     linkedList.add("soup");
//     linkedList.add("apple");
//     linkedList.addAt(2, "mouse");
//     let linkedArray = linkedList.toArray();
//     expect(linkedArray).toEqual(['apple', 'soup', 'mouse', 'speakers']);
// });

test('should add an entry at the start of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.add("mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['mouse', 'apple', 'soup', 'speakers']);
});

test('should add an entry at the start of the linked list using addAt()', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(0, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['mouse', 'apple', 'soup', 'speakers']);
});

test('should add an entry at position 2 of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(1, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['apple', 'mouse', 'soup', 'speakers']);
});

test('should add an entry at the end of the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.addAt(3, "mouse");
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(['apple', 'soup', 'speakers', 'mouse']);
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
    expect(linkedList.getEntry(2)).toEqual("speakers");
});

test('should delete an item from the linked list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add("speakers");
    linkedList.add("soup");
    linkedList.add("apple");
    linkedList.remove(2);
    let linkedArray = linkedList.toArray();
    expect(linkedArray).toEqual(["apple", "soup"]);
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
    expect(linkedArray).toEqual(["apple", "soup", "tablet"]);
});