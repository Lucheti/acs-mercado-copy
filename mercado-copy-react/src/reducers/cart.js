const cartReducer = (
    state = [], action
) => {
    switch (action.type) {
        case "ADD TO CART": {
            console.log("AGREGAMOS")
            const product = state.find(c=>c.product.id === action.data.product.id)
            if (product){
                const noier = action.data
                noier.quantity +=1
                return [noier, ...state.filter(c => c.product.id === action.data.id)]
            }else{
                return [...state, action.data]
            }
        }
        case "REMOVE FROM CART": {
            return [...state].filter(c => c.product.id !== action.data.id)
        }
        case "RESET CART": {
            return []
        }
        case "UPDATE CART": {
            return [action.data, ...state.filter(c => c.product.id !== action.data.product.id)]
        }
        default: {
            return state
        }

    }
}

export default cartReducer;
