import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";
const userReducer = (state = { authData: null}, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            localStorage.setItem("Profile", JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                authData: action?.payload
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                authData: null
            }
        default:
            return state;
    }
}

export default userReducer