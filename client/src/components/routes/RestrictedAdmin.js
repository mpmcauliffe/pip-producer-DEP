import React, { useContext, } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'


const RestrictedAdmin = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, user } = authContext

    if (user !== null) {
        return (
            <Route 
                { ...rest } 
                render={props => user.role === 'admin'
                    ?   (
                            <Component { ...props } />
                    ) : (
                            <Redirect to='/' />
                    )
                } />
        )    
    } else {
        return <Redirect to='/' />
    }
}


export { RestrictedAdmin }
