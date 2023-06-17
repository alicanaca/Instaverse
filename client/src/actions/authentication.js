import * as api from '../api'
import {
    AUTHENTICATION,
    LOGOUT
} from '../constants/actionTypes'

export const signup = (formValues, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formValues);
        dispatch({ type: AUTHENTICATION, payload: data });
        navigate('/');
    } catch (error) {
        console.log(error.message)
    }
};

export const login = (formValues, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formValues);
        dispatch({ type: AUTHENTICATION, payload: data });
        navigate('/');
    } catch (error) {
        console.log(error.message)
    }
};