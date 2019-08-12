import React, { useContext, } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'


const Restricted = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, user } = authContext

    if (user !== null) {
        return (
            <Route 
                { ...rest } 
                render={props => user.role === 'admin' || user.role === 'contributor' 
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


export { Restricted }
