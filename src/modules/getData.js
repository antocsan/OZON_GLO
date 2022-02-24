const getData = () => {
    return fetch('https://ozone-7779c-default-rtdb.firebaseio.com/goods.json')
        .then((response) => response.json());

}

export default getData