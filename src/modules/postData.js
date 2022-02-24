const postData = () => {
    fetch('http://localhost:3000/goods', {
            method: 'POST',
            body: JSON.stringify({
                title: "Игровая приставка Sony PlayStation 5",
                price: 63990,
                sale: false,
                img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
                category: "Игровая приставка"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        // .then((response) => response.json())
}

export default postData