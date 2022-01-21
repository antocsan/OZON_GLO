import { priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"


const priceSearch = () => {

    const priceInputStart = document.querySelector('.filter-price_input.start')
    const priceInputEnd = document.querySelector('.filter-price_input.end')
    const saleInput = document.getElementById('discount-checkbox')

    const filterGoods = () => {
        const start = priceInputStart.value;
        const end = priceInputEnd.value;
        const sale = saleInput.checked;
        getData().then((data) => {
            const goodsResult = priceFilter(data, start, end, sale);
            renderGoods(goodsResult)
        })
    };

    priceInputStart.addEventListener('change', () => {
        filterGoods();
    })

    priceInputEnd.addEventListener('change', () => {
        filterGoods();
    })

    saleInput.addEventListener('click', () => {
        console.log(saleInput.value)
        filterGoods();
    })
}

export default priceSearch



// const sum = (a, b) => {
//     return a * b;
// }

// console.log(sum(1, 3)); // 4
// console.log(sum(5, 2)); // 7

// const x = 4;
// const y = 6;
// console.log(sum(x, y)); // 10