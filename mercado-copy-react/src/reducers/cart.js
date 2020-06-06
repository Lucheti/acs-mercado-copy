const cartReducer = (
    state = [], action
) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.data]
        }
        case "REMOVE": {
            return [...state].filter(c => c.id !== action.data.id)
        }
        case "RESET": {
            return []
        }
        default: {
            return state
        }

    }
}

export default cartReducer;
