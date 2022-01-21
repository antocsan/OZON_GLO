const addCart = () => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const addBtn = document.querySelectorAll('.btn-primary');

    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains("addCart")) {
            console.log("clicked element", this.dataset["data-id"]);
        }
    });
    // addBtn.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //         console.log("clicked element");
    //     });
    // })

}

export default addCart