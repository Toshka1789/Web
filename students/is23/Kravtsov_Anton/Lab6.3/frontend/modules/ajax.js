class Ajax {
    async get(url, callback) {
        const response = await fetch(url);
        callback(await response.json());
    }

    async post(url, body, callback) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        callback(await response.json());
    }

    async delete(url, callback) {
        await fetch(url, { method: 'DELETE' });
        callback();
    }
}
export const ajax = new Ajax();
