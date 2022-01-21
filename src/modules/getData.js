const getData = () => {
    return fetch('https://test-570f5-default-rtdb.firebaseio.com/goods.json')
        .then((Response) => {
            return Response.json()
        })

}

export default getData