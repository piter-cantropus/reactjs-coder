
const products = [
    {id: '1', name: 'Casco Nolan', price: 1000, category: 'cascos', img:'https://media-imgproxy.motoblouz.com/_/rs580/images/catalogue/n64_gem_5487205336085.jpg', stock: 20, description: 'Casco Nolan'},
    {id: '2', name: 'Casco Nolan', price: 1100, category: 'cascos', img:'https://media-imgproxy.motoblouz.com/_/rs580/images/catalogue/n64_gem_5487205336085.jpg', stock: 30, description: 'Casco Nolan'},
    {id: '3', name: 'Casco Nolan', price: 1200, category: 'cascos', img:'https://media-imgproxy.motoblouz.com/_/rs580/images/catalogue/n64_gem_5487205336085.jpg', stock: 40, description: 'Casco Nolan'},
    {id: '4', name: 'Casco Nolan', price: 1300, category: 'cascos', img:'https://media-imgproxy.motoblouz.com/_/rs580/images/catalogue/n64_gem_5487205336085.jpg', stock: 20, description: 'Casco Nolan'},
    {id: '5', name: 'Casco Nolan', price: 1400, category: 'cascos', img:'https://media-imgproxy.motoblouz.com/_/rs580/images/catalogue/n64_gem_5487205336085.jpg', stock: 25, description: 'Casco Nolan'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (CategoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === CategoryId))
        }, 500)
    })
}

