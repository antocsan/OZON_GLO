import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilters } from "./filters"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value

        getData().then((data) => {
            renderGoods(searchFilters(data, value))
        })
    })

}

export default search