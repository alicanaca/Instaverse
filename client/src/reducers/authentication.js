
const userReducer = (state = [], action) => {
    switch (action.type) {
        case "AUTHENTICATION":
            return action.payload
        default:
            return state;
    }
}

export default userReducer