import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {ToastComponent} from "../../components/toast/index.js";

export class ProductPage 
{
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        const allData = [
            {
                id: 1,
                src: "https://i.pinimg.com/736x/e1/03/47/e1034786716fd7e4918ed230a2b3c91b.jpg",
                title: "Финансовый калькулятор",
                text: "Профессиональный калькулятор сложных процентов и налоговых вычетов. Поможет рассчитать реальную прибыль с учетом инфляции и комиссий брокера перед открытием позиции."
            },
            {
                id: 2,
                src: "https://i.pinimg.com/736x/1a/25/f8/1a25f8af618e8de9d56d691c38dd1244.jpg",
                title: "Личное планирование",
                text: "Комплексная система ведения бюджета. Позволяет связать ваши банковские карты, счета и кредиты в одном месте для наглядного анализа трат и формирования 'подушки безопасности'."
            },
            {
                id: 3,
                src: "https://i.pinimg.com/736x/8f/ce/f3/8fcef3ff2f7c4da3fc3a62b5a45e27df.jpg",
                title: "Торговые операции",
                text: "Прямой доступ к биржевым торгам. Совершайте сделки с акциями, облигациями и валютой в один клик. Все операции подтверждаются электронным договором и защищены по стандартам безопасности."
            }
        ];
        return allData.find(item => item.id === Number(this.id));
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickBuy() {
        const currentData = this.getData(); 
        const toast = new ToastComponent(this.parent);
        
        toast.render({ 
            message: `Актив "${currentData.title}" успешно добавлен в ваш портфель!` 
        });
    }


    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const product = new ProductComponent(this.pageRoot)
        product.render(data)

        this.pageRoot.insertAdjacentHTML('beforeend', `
            <button id="buy-btn" class="btn btn-success mt-3">Купить актив</button>`);

        document.getElementById('buy-btn').addEventListener('click', this.clickBuy.bind(this));
    }
}