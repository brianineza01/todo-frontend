import loginReducer from './loginReducer';
import { loginRequest, loginSuccess, loginFail }from '../../actions'

describe('loginReducer test suite' ,() => {

    it('should return a default state', () => {
        const newState = loginReducer(undefined, {})
        expect(newState).toStrictEqual({
            loading: false,
            authorization: '',
            userData: {},
            error: ''
        })
    })

    it('should return a new state with loading to true', () => {
        const newState = loginReducer(undefined, loginRequest())
        expect(newState).toStrictEqual({
            loading: true,
            authorization: '',
            userData: {},
            error: ''
        })
    })
    it('should return a new state with user object and authorization', () => {
        const payload = {
            message: 'user successfully loged in',
            data: {
                token: 'I am a token',
                user: {
                    email: 'dummy email',
                    names: 'dummy names'
                }
            }
        }
        const newState = loginReducer(undefined, loginSuccess(payload))
        expect(newState).toStrictEqual({
            loading: false,
            authorization: 'I am a token',
            userData: {
                email: 'dummy email',
                names: 'dummy names'
            },
            error: ''
        })
    })

    it('should return a new state with error message', () => {
        const payload = 'Error in finding everything'
        const newState = loginReducer(undefined, loginFail(payload))
        expect(newState).toStrictEqual({
            loading: false,
            authorization: '',
            userData: {},
            error: 'Error in finding everything'
        })
    })

})