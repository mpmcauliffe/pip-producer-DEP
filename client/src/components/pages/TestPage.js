import React, { Fragment, useEffect, useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { 
    MainContainer, 
    Slide, 
    UserContainer, 
} from '../styled-components'

/**
 * 
 * THIS TEST DOES NOT WORK ! ! ! 
 *      OH NO! WE"RE GOING TO DIE!
 */
const TestPage = () => {
    const articleContext = useContext(ArticleContext)
    const { getArticles, articles, } = articleContext

    useEffect(() => {
        getArticles()

    // eslint-disable-next-line
    }, [])

    if (articles === null) {
        return null
    } else {
        return (
            <MainContainer>
                <h1>TEST PAGE</h1>
                <h2>Test failed</h2>
                <p>you died . . .</p>
                {articles.filter(article => articles.isPublish === true &&
                    <UserContainer>
                        <Slide published>
                            <h4>{article.title}</h4>
                        </Slide>
                    </UserContainer>
                )}
                
            </MainContainer>
        )
    }
    
}


export { TestPage }
