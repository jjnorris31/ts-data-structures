export default interface Iterator<T> {
    /**
     * Detects when this iterator has completed its traversal
     * and gone beyond the last entry in the collection of data.
     * @return true if the iterator has another entry to return
     */
    hasNext(): boolean;

    /**
     * Retrieves the next entry in the collection and
     * advances this iterator by one position.
     * @return a reference to the next entry in the iteration if one exists
     * @throws NoSuchElementException if the iterator had reached the end already, that is,
     * if hasNext() is false
     */
    next(): T;

    /**
     * Removes from the collection of data the last entry that
     * next() returned. A subsequent call to next() will behave before the
     * removal.
     * Precondition: next() has been called, and remove() has not been called since then.
     * the collection has not been altered during the iteration except by calls tho this methods.
     * @throws IllegalStateException if next() has not been called, or if remove() was
     * called already after the last call to next().
     * @throws UnsupportedOperationException if the iterator does not permit a remove operation
     */
    remove(): void; // optional method

} 