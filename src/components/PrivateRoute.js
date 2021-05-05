import React from 'react'
import {useAuth} from './../contexts/AuthContext'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({children, ...otherProperties}) => {
    const {user} = useAuth();

    if (user) {
        return <Route {...otherProperties}>{children}</Route>
    } else {
        return <Redirect to="/log-in" />
    }
}

export default  ProtectedRoute;
