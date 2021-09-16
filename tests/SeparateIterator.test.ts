import SeparateIterator from '../iterator/SeparateIterator';
import IllegalStateOperationError from '../error/IllegalStateOperationError';
import NoSuchElementError from '../error/NoSuchElementError';
import LinkedList from "../linked-list/LinkedList";


test("should return an element from iterator using next() method", () => {
    let separateIterator = new SeparateIterator<String>(new LinkedList(["Computer", "Tablet"]));
    expect(separateIterator.next()).toEqual("Tablet");
});

test("should throws IllegalStateOperationError when iterator calls illegally to remove()", () => {
    let separateIterator = new SeparateIterator<String>(new LinkedList(["Computer", "Tablet"]));
    expect(() => {
        separateIterator.next();
        separateIterator.remove();
        separateIterator.remove();
    }).toThrowError(IllegalStateOperationError);
});


test("should remove an entry from iterator", () => {
    let separateIterator = new SeparateIterator<String>(new LinkedList(["Computer", "Tablet"]));
    expect(() => {
        separateIterator.next();
        separateIterator.remove();
        separateIterator.next();
    }).toThrowError(NoSuchElementError);
});

test("should throws NoSuchElementError when iterator have not another entry", () => {
    let separateIterator = new SeparateIterator<String>(new LinkedList(["Computer", "Tablet"]));
    expect(() => {
        separateIterator.next();
        separateIterator.next();
        separateIterator.next();
    }).toThrowError(NoSuchElementError);
});