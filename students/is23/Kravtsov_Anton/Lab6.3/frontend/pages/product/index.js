import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {ToastComponent} from "../../components/toast/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
        this.currentData = null;
    }

    getData() {
        ajax.get(urls.getInternalItemById(this.id), (data) => {
            this.currentData = data;
            this.renderContent(data);
        });
    }

    renderContent(data) {
        if (data) {
            const product = new ProductComponent(this.pageRoot);
            product.render(data);

            this.pageRoot.insertAdjacentHTML('beforeend', `
                <button id="buy-btn" class="btn btn-success mt-3">Купить актив</button>
            `);

            document.getElementById('buy-btn').addEventListener('click', this.clickBuy.bind(this));
        } else {
            this.pageRoot.insertAdjacentHTML('beforeend', '<p class="text-danger">Данные не найдены</p>');
        }
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return `<div id="product-page"></div>`;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    clickBuy() {
        if (!this.currentData) return;
        
        const toast = new ToastComponent(this.parent);
        toast.render({ 
            message: `Актив "${this.currentData.title}" успешно добавлен в ваш портфель!` 
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.getData();
    }
}
