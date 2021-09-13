const fetchData = async () => {
    const url = 'http://127.0.0.1:8081/products'
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => {
            data.map((result) => {
                console.log(!!result.manufacturer ?
                `Product ${result.name} has price ${result.price} and manufacturer ${result.manufacturer}` :
                `Product ${result.name} has price ${result.price} and no manufacturer`)
            })
        }) 
}


fetchData.map((result) => {
    console.log(!!result.manufacturer ?
    `Product ${result.name} has price ${result.price} and manufacturer ${result.manufacturer}` :
    `Product ${result.name} has price ${result.price} and no manufacturer`)
})