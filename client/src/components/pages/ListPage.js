import React, { Fragment, useEffect, useContext, useState, } from 'react'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { ArticleTypeToggle, Scorebar, } from '../react-components'
import {  
    MainContainer, 
    Slide, 
    SlideContainer, 
    Thumbnail, 
    UserContainer, } from '../styled-components'
import Loading from '../loading/Loading'
import moment from 'moment'
import { truncate, } from '../../helpers'


const ListPage = () => {
    const authContext = useContext(AuthContext)
    const { loadUser, user, } = authContext

    const articleContext = useContext(ArticleContext)
    const { getArticles, type, deleteArticle, clearSingle, articles, getSingle } = articleContext

    useEffect(() => {
        loadUser()
        getArticles()
        clearSingle()

        console.log(window.innerWidth)
        window.scrollTo(0,0)

    // eslint-disable-next-line
    }, [])


    if (articles === null || user === null) {
        return <Loading />

    } else {
        return (
            <MainContainer>
                {user.role === 'admin' || user.role === 'contributor' 
                    ? <ArticleTypeToggle /> : null
                }
                

                {type !== null && 
                    type.map(article => (
                    <Fragment key={article._id}>
                        <Link 
                            to={`/article/${article._id}`}
                            style={{ textDecoration: 'none', }} >

                            <Slide published={article.isPublished}>
                                <SlideContainer>
                                    <h2>{window.innerWidth > 768 ? truncate(article.title, 50) : truncate(article.title, 40)}</h2>
                                    <h4><em>Author: </em>{article.author}</h4>
                                    <h4><em>Date: </em>{moment(article.date).format('MMMM Do YYYY')}</h4>
                                </SlideContainer>

                                <SlideContainer image>
                                    <Thumbnail src={article.picture} alt='img' />
                                </SlideContainer>
                            </Slide>
                        </Link>

                        {user.role === 'admin' || article.user === user._id 

                            ?   (
                                    <UserContainer published={article.isPublished}> 
                                        
                                        <Link 
                                            to={`/create/${article._id}/${user._id}`} 
                                            onClick={() => getSingle(article._id, user._id)}
                                            style={{ textDecoration: 'none', }}

                                        >   <p className='small-use edit-use'>Edit</p>
                                        </Link>

                                        <p
                                            onClick={() => deleteArticle(article._id)} 
                                            className='small-use delete-use'
                                        >   Delete
                                        </p>
                                    </UserContainer>
                                ) : (
                                    null
                                )
                        }                     
                    </Fragment>                       
                    ))
                }
            </MainContainer>
        )
    }    
}


export { ListPage }


/**
 * 
 * className='user-card' 
                                        style={{ width: '99rem', padding: '0 3rem', }}>
 */