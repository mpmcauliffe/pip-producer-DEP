import React from 'react'
import AuthState from './context/auth/AuthState'
import AdminState from './context/adminContext/AdminState'
import ArticleState from './context/articleContext/ArticleState'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute, Restricted, RestrictedAdmin, } from './components/routes'
import {  
    Article,
    Create,
    FrontPage,
    ListPage,
    Login,
    NotFound,
    Register,
    Users,
} from './components/pages'
import {
    Footer,
    Navbar,
} from './components/react-components'
import setAuthToken from './utils/setAuthToken'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {


    return (
        <AuthState>
            <AdminState>
                <ArticleState>
                    <Navbar />

                    <Switch>
                        <Route /* PUBLIC */
                            exact
                            path='/'
                            component={FrontPage} />

                        <Route /* PUBLIC */
                            exact 
                            path='/register'
                            component={Register} />

                        <Route /* PUBLIC */
                            exact 
                            path='/login'
                            component={Login} />

                        <PrivateRoute /* PRIVATE */
                            exact
                            path='/listpage'
                            component={ListPage} />

                        <PrivateRoute /* PRIVATE */
                            exact
                            path='/article/:id'
                            component={Article} />

                        <Restricted /* RESTRICTED */
                            exact
                            path='/create'
                            component={Create} />

                        <Restricted /* RESTRICTED */
                            exact
                            path='/create/:articleId/:userId'
                            component={Create} />
                        
                        <RestrictedAdmin /* RESTRICTED */
                            exact
                            path='/users'
                            component={Users} />

                        <Route /* PUBLIC ALL OTHER POSSIBLE ROUTES */ 
                            component={NotFound} />
                    </Switch>
                    <Footer />
                </ArticleState>
            </AdminState>           
        </AuthState>
    )
}


export default App
