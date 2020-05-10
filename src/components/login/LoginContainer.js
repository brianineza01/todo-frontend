import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/'
import UserInfo from '../userInfo/UserInfoContainer'
import './login.css'

export class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { login } = this.props;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        login(data)
    }
    render() {

        return (
            <div className="login">
                <div className="login-container">
                    <h1> TODO APP </h1>
                    <br />
                    <h2> Welcome to our app, log in to continue </h2>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='email'
                            id='input-auth-email'
                        />
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder='password'
                            id='input-auth-password'
                        />
                        <br />
                        <button className='submit-button'>Log in</button>
                    </form>
                </div>
                <UserInfo />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.userData,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
