import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }

    clickCard(e) {
    const cardId = e.target.dataset.id

    const productPage = new ProductPage(this.parent, cardId)
    productPage.render()
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/736x/e1/03/47/e1034786716fd7e4918ed230a2b3c91b.jpg",
                title: "Финансовый калькулятор",
                text: "Инструмент для точного расчета доходности ваших инвестиций."
            },
            {
                id: 2,
                src: "https://i.pinimg.com/736x/1a/25/f8/1a25f8af618e8de9d56d691c38dd1244.jpg",
                title: "Личное планирование",
                text: "Создайте стратегию распределения доходов и управления активами."
            },
            {
                id: 3,
                src: "https://i.pinimg.com/736x/8f/ce/f3/8fcef3ff2f7c4da3fc3a62b5a45e27df.jpg",
                title: "Торговые операции",
                text: "Исполнение ордеров на покупку и продажу ценных бумаг."
            },
        ]
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
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
    
}