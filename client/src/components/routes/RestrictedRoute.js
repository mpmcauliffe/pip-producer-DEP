import React, { useContext, useEffect, } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Loading from '../loading/Loading'


const Restricted = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    const { loadUser, isAuthenticated, user, loading, } = authContext

    useEffect(() => {
        loadUser()

    // eslint-disable-next-line
    }, [])


    if (isAuthenticated && !loading && user !== null) {
        return (
            <Route 
                { ...rest } 
                render={props => user.role === 'admin' || user.role === 'contributor' 
                    ?   (
                            <Component { ...props } />
                    ) : (
                            <Redirect to='/listpage' />
                    )
                } />
        )
    } else {
        return <Loading />
    }
}


export { Restricted }
