import Book from './Book.js';

export default (new function() {
    const self = this;
    const book = new Book("lol");

    this.getBook = function() {
        return book;
    };
});