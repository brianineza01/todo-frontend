import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/login/loginTypes'

const initialState = {
    loading: false,
    authorization: '',
    userData: {},
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            const {message, data} = action.payload
            return {
                ...state,
                loading: false,
                authorization: data.token,
                userData: data.user,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                authorization:'',
                userData: {},
                error: action.payload
            }
        default: return state
    }
}

export default loginReducer;