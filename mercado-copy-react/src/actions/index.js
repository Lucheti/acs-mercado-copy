export const addProduct = (product, quantity) => {
    return{
        type: "ADD TO CART",
        data: {product: product, quantity:quantity}
    }
}

export const updateProduct = (product, quantity) => {
    return{
        type: "UPDATE CART",
        data: {product: product, quantity:quantity}
    }
}

export const removeProduct = product => {
    return{
        type: "REMOVE FROM CART",
        data: product
    }
}

export const resetCart = product => {
    return{
        type: "RESET CART",
    }
}

export const addToWishlist = product => {
    return{
        type: "ADD TO WISHLIST",
        data: product
    }
}

export const removeFromWishlist = product_id => {
    return{
        type: "REMOVE FROM WISHLIST",
        data: product_id
    }
}

export const resetWishlist = product => {
    return{
        type: "RESET WISHLIST",
    }
}
