export class ProductCardComponent 
{
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const photoUrl = data.photo_200 || data.photo_max_orig || 'https://vk.com/images/camera_400.png';
        
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${photoUrl}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}