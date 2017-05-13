;"use strict";

export default class Book {
    constructor(name) {
        this.name = name || "";
    }

    getName() {
        return this.name;
    }
}