const postData = (cart) => {
    fetch('db\db.json', {
            method: 'POST',
            body: JSON.stringify(cart),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
}

export default postData