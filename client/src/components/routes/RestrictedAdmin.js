import React, { useContext, } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Loading from '../loading/Loading'


const RestrictedAdmin = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { user, } = authContext


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
        return <Loading />
    }
}


export { RestrictedAdmin }
