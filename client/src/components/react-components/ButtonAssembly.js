import React, { Fragment, useContext, } from 'react'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { Button, } from '../styled-components'


const style = {
    outerRow: {
        display: 'flex', 
        width: '90vw', 
        justifyContent: 'space-between',
    },
    outerColumn: {
        display: 'flex',
        height: '50vh',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    right: {
        display: 'flex', 
        alignItems: 'center',
    },
}

const ButtonAssembly = () => {
    const authContext = useContext(AuthContext)
    const { logout, isAuthenticated, } = authContext

    const articleContext = useContext(ArticleContext)
    const { clearSingle, } = articleContext

    const onLogout = () => {
        logout()
    }


    const authLinks = (
        <div style={window.innerWidth > 768 ? style.outerRow : style.outerColumn}>
            <div>
                <Link to='/listpage'>
                    <Button>Blog</Button>
                </Link>
            </div>

            <div style={window.innerWidth > 768 ? style.right : style.outerColumn}>
                <Link to='/register'>
                    <Button style={{ marginRight: '3rem', }}>
                        Register
                    </Button>
                </Link>

                <Link to='/login'>
                    <Button>
                        Login
                    </Button>
                </Link>         
            </div>
        </div>
        
    )

    const welcomeLinks = (
        <div style={window.innerWidth > 768 ? style.outerRow : style.outerColumn}>
            <div>
                <Link to='/listpage'>
                    <Button>Blog</Button>
                </Link>
            </div>

            <div style={window.innerWidth > 768 ? style.right : style.outerColumn}>
                <Link to='/users'>
                    <Button style={{ marginRight: '3rem', }}>
                        Users
                    </Button>
                </Link>

                <Link 
                    to='/create'
                    onClick={() => clearSingle()} >
                    <Button style={{ marginRight: '3rem', }}>
                        Create
                    </Button>
                </Link>

                <Button onClick={onLogout}>
                    Logout    
                </Button>
            </div>  
        </div>
        
    )

    const constructionLinks = (
        <div style={window.innerWidth > 768 ? style.outerRow : style.outerColumn}>
            <div>
                <Link to='/listpage'>
                    <Button>Blog</Button>
                </Link>
            </div>
        
            <div style={window.innerWidth > 768 ? style.right : style.outerColumn}>
                <Link to='/users'>
                    <Button style={{ marginRight: '3rem', }}>
                        Users
                    </Button>
                </Link>

                <Link 
                    to='/create'
                    onClick={() => clearSingle()} >
                    <Button style={{ marginRight: '3rem', }}>
                        Create
                    </Button>
                </Link>

                <Link to='/register'>
                    <Button style={{ marginRight: '3rem', }}>
                        Register
                    </Button>
                </Link>

                <Link to='/login'>
                    <Button>
                        Login
                    </Button>
                    
                <Button onClick={onLogout}>
                    Logout    
                </Button>
                </Link>
            </div>
        </div>
    )


    return (
        <Fragment>
            {constructionLinks}
        </Fragment>
    )
}


export { ButtonAssembly }
