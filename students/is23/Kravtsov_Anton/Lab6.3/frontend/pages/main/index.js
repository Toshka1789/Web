import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() { 
        return document.getElementById('main-page'); 
    }

    getData() {
        ajax.get(urls.getInternalItems(), (data) => {
            this.renderData(data);
        });
    }

    renderData(items) {
        if (!this.pageRoot) return;
        this.pageRoot.innerHTML = '';
        
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(
                item, 
                this.clickCard.bind(this), 
                () => this.deleteCard(item.id)
            );
        });
    }

    deleteCard(id) {
        if (confirm("Вы уверены, что хотите удалить этот актив?")) {
            ajax.delete(urls.getInternalItemById(id), () => {
                this.getData();
            });
        }
    }

    addCard() {
        const title = prompt("Введите название актива:");
        if (!title) return;

        const text = prompt("Введите описание:", "Финансовый инструмент");
        const src = prompt("Ссылка на картинку:", "https://i.pinimg.com");

        const newItem = {
            src: src || "https://i.pinimg.com",
            title: title,
            text: text
        };

        ajax.post(urls.getInternalItems(), newItem, () => {
            this.getData();
        });
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }
        
    render() {
        this.parent.innerHTML = `
            <div class="container mt-3">
                <button id="add-btn" class="btn btn-success mb-3">Добавить карточку</button>
                <div id="main-page" class="d-flex flex-wrap"></div>
            </div>
        `;
        
        const addBtn = document.getElementById('add-btn');
        if (addBtn) {
            addBtn.onclick = () => this.addCard();
        }

        this.getData();
    }
}
