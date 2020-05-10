import moxios from 'moxios';
import testStore from '../store/testStore';
import { login } from '../actions';

describe('login action', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly with sucessfully signed in user', async () => {
        const expectedResponse = {
            token: 'I am a token',
            user: {
                id: '1',
                email: 'chris@email.com',
                names: 'chris test',
                avatar: 'link to avatar',
                oauthid: '',
            }
        }
        const formData = {
            email: 'chris@email.com',
            password: '12345'
        }
        const store = testStore;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    data: expectedResponse
                }
            })
        })
        await store.dispatch(login(formData));
        const newState = store.getState();
        expect(newState.login.userData).toBe(expectedResponse.user);
        expect(newState.login.authorization).toBe(expectedResponse.token);
    });

    test('Store is updated correctly with an error', async () => {
        const expectedResponse = {
            message: 'Request failed with status code 404'
        }
        const formData = {
            email: 'chrisdummy@email.com',
            password: '1234554'
        }
        const store = testStore;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: {
                    data: expectedResponse
                }
            })
        })
        await store.dispatch(login(formData));
        const newState = store.getState();
        expect(newState.login.error).toBe(expectedResponse.message);
        expect(newState.login.authorization).toBe('');
        expect(newState.login.userData).toStrictEqual({});
    });
});
