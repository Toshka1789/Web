export class SortComponent {
    constructor(parent) {
        this.parent = parent;
    }


    getHTML(currentSort) {
        return `
            <div class="mb-3">
                <label for="sort-select" class="form-label text-primary fw-bold">Сортировка участников:</label>
                <select id="sort-select" class="form-select w-25">
                    <option value="id_asc" ${currentSort === 'id_asc' ? 'selected' : ''}>По возрастанию ID (старые)</option>
                    <option value="id_desc" ${currentSort === 'id_desc' ? 'selected' : ''}>По убыванию ID (новые)</option>
                    <option value="time_asc" ${currentSort === 'time_asc' ? 'selected' : ''}>По времени вступления (старые)</option>
                    <option value="time_desc" ${currentSort === 'time_desc' ? 'selected' : ''}>По времени вступления (новые)</option>
                </select>
            </div>
        `;
    }

    addListeners(listener) {
        const select = document.getElementById('sort-select');
        select.addEventListener("change", (e) => {
            listener(e.target.value);
        });
    }

    render(currentSort, listener) {
        const html = this.getHTML(currentSort);
        this.parent.insertAdjacentHTML('afterbegin', html);
        this.addListeners(listener);
    }
}
