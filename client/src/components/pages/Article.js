import React, { useEffect, useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { CoverImage, FormContainer, } from '../styled-components'
import { BackToTop, } from '../react-components'
import Loading from '../loading/Loading'
import moment from 'moment'


const Article = props => {
    const articleContext = useContext(ArticleContext)
    const { single, getSingle, } = articleContext

    useEffect(() => {
        getSingle(props.match.params.id)
        window.scrollTo(0,0)

    // eslint-disable-next-line
    }, [])


    if (single === null) {
        return <Loading />
    } else {
        return (
            <FormContainer>
                <CoverImage 
                    src={single.picture} 
                    alt='img' 
                    style={{ margin: '2 auto', maxHeight: '80vh' }} />

                <h2>{single.title}</h2>
                <br />

                <h4><em>by </em>{single.author}</h4>
                <h4><em>date </em>{moment(single.date).format('MMMM Do YYYY')}</h4>
                <hr />
                <br /><br /><br /><br /><br />

                <pre>{single.content}</pre>   
                
                <BackToTop />
            </FormContainer>            
        )
    }
}


export { Article }
