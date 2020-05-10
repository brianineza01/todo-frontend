import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './loginTypes';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFail = payload => ({
    type: LOGIN_FAIL,
    payload
})
export const login = form => {
    return async dispatch => {
        try {
            dispatch(loginRequest());
            const response = await axios(
                {
                    method: 'post',
                    url: 'https://todo-v1-app.herokuapp.com/api/v1/auth/signin',
                    data: form
                })
            const { data } = response;
            dispatch(loginSuccess(data))
        } catch (error) {
            const { message } = error;
            dispatch(loginFail(message))
        }

    }
}
