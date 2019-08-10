import React, { Fragment, useContext, } from 'react'
import AuthState from './context/auth/AuthState'
import AdminState from './context/adminContext/AdminState'
import ArticleState from './context/articleContext/ArticleState'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components/routes'
import {  
    Article,
    Create,
    FrontPage,
    ListPage,
    Login,
    NotFound,
    Register,
    TestPage,
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

                        <Route /* PRIVATE */
                            exact
                            path='/listpage'
                            component={ListPage} />

                        <Route /* PRIVATE */
                            exact
                            path='/article/:id'
                            component={Article} />

                        <Route /* RESTRICTED */
                            exact
                            path='/create'
                            component={Create} />

                        <Route /* RESTRICTED */
                            exact
                            path='/create/:articleId/:userId'
                            component={Create} />
                        
                        <Route /* RESTRICTED */
                            exact
                            path='/users'
                            component={Users} />

                        <Route /* RESTRICTED */
                            exact
                            path='/test'
                            component={TestPage} />

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
