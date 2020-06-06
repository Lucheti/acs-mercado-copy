export const addProduct = product => {
    return{
        type: "ADD",
        data: product
    }
}

export const removeProduct = product => {
    return{
        type: "REMOVE",
        data: product
    }
}

export const resetCart = product => {
    return{
        type: "RESET",
    }
}

export const addToWishlist = product => {
    return{
        type: "ADD",
        data: product
    }
}

export const removeFromWishlist = product => {
    return{
        type: "REMOVE",
        data: product
    }
}

export const resetWishlist = product => {
    return{
        type: "RESET",
    }
}
