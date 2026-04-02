class Ajax {
    async post(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();

            callback(data);
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }
}

export const ajax = new Ajax();
