export class ProductCardComponent 
{
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card m-2" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Детали</button>
                        <button class="btn btn-danger" id="delete-card-${data.id}" data-id="${data.id}">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    }

    render(data, listener, deleteListener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        
        document.getElementById(`click-card-${data.id}`).addEventListener("click", listener);
        document.getElementById(`delete-card-${data.id}`).addEventListener("click", deleteListener);
    }

}