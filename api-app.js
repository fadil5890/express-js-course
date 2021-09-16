const express = require('express')
const app = express();
const {people, products} = require('./data.js')

app.get('/', (req, res) => {
    res.status(200).send(
    `
    <h1>Home Page</h1>
    <a href="/api/products">Products</a>
    `)
})

app.get('/api/products', (req, res) => {
    let mappedProducts = products.map(product => {
        const {id, name, image} = product
        return {id, name, image}
    })
    const {search, limit} = req.query;
    const target = new RegExp(`${search}`,'i' + 'g')

    if(search){
        mappedProducts = mappedProducts.filter((product) => {
            return target.test(product.name)
        })
    }
    if(limit){
        mappedProducts = mappedProducts.slice(0,Number(limit))
    }

    res.status(200).json(mappedProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const product_1 = products.find(product => {
        return product.id === Number(req.params.productID)
    })
    if(!product_1){
        return res.status(404).send(
            `
            <h1>Oops!</h1>
            <p>We can't find it here :(</p>
                <a href="/">Back to Home</a>
                `)
    }
    res.status(200).json(product_1)
})

app.all('*', (req, res) => {
    res.status(404).send(
        `
        <h1>Oops!</h1>
        <p>We can't find it here :(</p>
        <a href="/">Back to Home</a>
        `)
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000.....`)
})