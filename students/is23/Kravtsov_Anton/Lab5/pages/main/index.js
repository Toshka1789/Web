import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";
import { SortComponent } from "../../components/sort/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.currentSort = 'id_asc';
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }

    clickCard(e) {
    const cardId = e.target.dataset.id

    const productPage = new ProductPage(this.parent, cardId)
    productPage.render()
    }

    onSortChange(newSort) {
        this.currentSort = newSort;
        this.render();
    }
    
    getData() {
        ajax.post(urls.getGroupMembers(groupId, this.currentSort), (data) => {
            this.renderData(data.response.items);
        });
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
 
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"></div>
            `
        )
    }
    
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const sortComp = new SortComponent(this.parent);
        sortComp.render(this.currentSort, this.onSortChange.bind(this));

        this.getData()
    }
    
}