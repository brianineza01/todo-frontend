import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import store from '../../store';
import propTypes from 'prop-types'

export const UserInfoContainer = (props) => {
    if (props.error) {
        alert('wrong email or password')
        return (
            null
        );
    }
    if (props.userData.email) {
        return (
            <div>
                <h2> Your Email is <span> {props.userData.email} </span> </h2>
                <h2> Your names are <span> {props.userData.names} </span> </h2>
            </div>
        )
    }
    return (null);
}

UserInfoContainer.propTypes = {
    userData: propTypes.shape({
        id: propTypes.number,
        email: propTypes.string,
        names: propTypes.string,
        oauthid: propTypes.string,
        avatar: propTypes.string,
    }),
    error: propTypes.string
}

const mapStateToProps = (state) => {
    const { userData, error } = state.login
    if (userData !== undefined || error !== undefined) return { userData, error }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)
