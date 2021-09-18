import IteratorInterface from './IteratorInterface';
import IllegalStateOperationError from '../error/IllegalStateOperationError';
import NoSuchElementError from '../error/NoSuchElementError';
import LinkedListInterface from '../linked-list/LinkedListInterface';


export default class SeparateIteration<T> implements IteratorInterface<T> {

    private list: LinkedListInterface<T>;
    private nextPosition: number;
    private wasNextCalled: boolean;

    constructor(list: LinkedListInterface<T>) {
        this.list = list;
        this.nextPosition = 0;
        this.wasNextCalled = false;
    }

    hasNext(): boolean {
        return this.nextPosition < this.list.size();
    }

    next(): T {
        if (this.hasNext()) {
            this.wasNextCalled = true;
            this.nextPosition++;
            return this.list.getEntry(this.nextPosition - 1);
        } else {
            throw new NoSuchElementError("There is not another entry");
        }
    }

    remove(): void {
        if (!this.wasNextCalled) {
            throw new IllegalStateOperationError("Illegal call to remove(), next() was not called");
        } else {
            this.list.remove(this.nextPosition - 1);
            this.nextPosition--;
            this.wasNextCalled = false;
        }
    }

}
