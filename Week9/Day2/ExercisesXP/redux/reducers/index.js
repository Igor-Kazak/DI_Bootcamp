const reducer = (state, action) => {
    let current = action.counter;
    switch (action.type) {
        case "FORWARD":
            return {
                ...state, 
                count: current-(-1), 
            }
        case "BACKWARD":
            return {
                ...state, 
                count: current-1, 
            }
        default:
            return state;
    }
}

export { reducer };