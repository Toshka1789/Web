class Urls {
    constructor() {
        this.url = 'http://localhost:8000/api';
    }

    getInternalItems() {
        return `${this.url}/items`;
    }

    getInternalItemById(id) {
        return `${this.url}/items/${id}`;
    }
}

export const urls = new Urls();
