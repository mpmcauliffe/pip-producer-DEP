import React, { Fragment, useEffect, useContext, useState, } from 'react'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { ArticleTypeToggle, BackToTop, EditBar, Scorebar, } from '../react-components'
import {  
    MainContainer, 
    Slide, 
    SlideContainer, 
    Thumbnail, } from '../styled-components'
import Loading from '../loading/Loading'
import moment from 'moment'
import { truncate, } from '../../helpers'


const ListPage = () => {
    const authContext = useContext(AuthContext)
    const { loadUser, user, } = authContext

    const articleContext = useContext(ArticleContext)
    const { getArticles, type, filterByType, clearSingle, articles, } = articleContext

    useEffect(() => {
        loadUser()
        getArticles()
        clearSingle()

        window.scrollTo(0,0)

    // eslint-disable-next-line
    }, [])


    if (articles === null || user === null) {
        return <Loading />

    } else {
        return (
            <MainContainer>
                <div style={{ margin: '3vh auto' }}>
                    <ArticleTypeToggle user={user} /> 
                </div>
                
                {type !== null && 
                    type.map(article => (
                    <Fragment key={article._id}>
                        <Link 
                            to={`/article/${article._id}`}
                            style={{ textDecoration: 'none', }} >

                            <Slide published={article.isPublished}>
                                <SlideContainer>
                                    <h2>{window.innerWidth > 768 ? truncate(article.title, 50) : truncate(article.title, 35)}</h2>
                                    <h4><em>Author: </em>{article.author}</h4>
                                    <h4><em>Date: </em>{moment(article.date).format('MMMM Do YYYY')}</h4>
                                </SlideContainer>

                                <SlideContainer image>
                                    <Thumbnail src={article.picture} alt='img' />
                                </SlideContainer>
                            </Slide>
                        </Link>

                        <EditBar 
                            user={user} 
                            article={article} />                   
                    </Fragment>                       
                    ))
                }

                <BackToTop />
            </MainContainer>
        )
    }    
}


export { ListPage }
