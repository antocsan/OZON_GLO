const test = () => {
    const Btn = document.querySelectorAll('.btn-primary');


    // Btn.addEventListener('click', () => {
    //     postData().then((data) => {
    //         console.log(data);
    Btn.forEach(data => {
        item.addEventListener('click', () => {
            console.log(data);

            // getData().then((data) => {
            //     renderGoods(data);
            //         })
        })
    })
}

export default test