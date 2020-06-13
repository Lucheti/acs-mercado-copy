const wishlistReducer = (
    state = [], action
) => {
    switch (action.type) {
        case "ADD TO WISHLIST": {
            return [...state, action.data]
        }
        case "REMOVE FROM WISHLIST": {
            return [...state].filter(c => c.id !== action.data)
        }
        case "RESET WISHLIST": {
            return []
        }
        default: {
            return state
        }

    }
}

export default wishlistReducer;
