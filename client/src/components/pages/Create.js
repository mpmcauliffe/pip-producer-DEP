import React, { useState, useContext, useEffect } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { FileUpload, } from '../react-components'
import { Button, ButtonSet, MainContainer, } from '../styled-components'
import 'simplebar/dist/simplebar.min.css'


const Create = props => {
    const articleContext = useContext(ArticleContext)
    const { saveArticle, updateArticle, single } = articleContext

    const [data, setData] = useState({
        title: '',
        author: '',
        date: '',
        content: '', 
        imagePath: '',
        isPublished: false,
    })

    const [buttonActive, setButonActive] = useState(data.isPublished)

    useEffect(() => {
        if (single !== null) {
            setData(single[0])
            console.log(single[0].isPublished)
            setButonActive(single[0].isPublished)
        } else {
            setData({
                title: '',
                author: '',
                date: '',
                content: '', 
                imagePath: '',
                isPublished: false,
            })
        }
        //window.scrollTo(0,0)

    // eslint-disable-next-line
    }, [single])

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

    const onPublish = e => {
        e.preventDefault()
        setData({ ...data, isPublished: !data.isPublished })
        setButonActive(!buttonActive)
    }
    
    const setImagePath = filePath => setData({ ...data, imagePath: filePath })
    

    const submit = e => {
        e.preventDefault()

        console.log("Published? ", data.isPublished)

        if (single !== null) {
            console.log('article edit')
            //updateArticle(data)
        } else {
            console.log('article save')
            //saveArticle(data)
        }
    }


    return (
        <MainContainer style={{ margin: '3rem auto', }}>
            
            <form autoComplete='off'>
                <input  /* TITLE */
                    value={data.title}
                    name='title'
                    onChange={onChange}

                    className='form-control form-control-lg' 
                    placeholder='Title' 
                    type='text'
                    style={{ fontSize: '3rem', 
                        marginBottom: '4rem' }} />

                <input  /* AUTHOR */
                    value={data.author}
                    name='author'
                    onChange={onChange}

                    className='form-control form-control-lg' 
                    placeholder='Author' 
                    type='text' 
                    style={{ fontSize: '2.4rem', 
                        marginBottom: '2rem ', }} />

                <input  /* DATE */
                    value={data.date} 
                    name='date' 
                    onChange={onChange}

                    className='form-control' 
                    placeholder={data.date}
                    type='date'
                    style={{ fontSize: '2.4rem', 
                        height: '4.8rem',
                        width: '100%', 
                        marginBottom: '10rem', }} />

                <FileUpload setImagePath={setImagePath} />
                
                <textarea /* CONTENT */
                    value={data.content}
                    name='content'
                    onChange={onChange}

                    className='form-control' 
                    placeholder='Blog Content'
                    rows='40' 
                    style={{ fontSize: '2rem',
                        margin: '5rem 0' }} />

                <div style={{ display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6rem' }} >

                    <div>
                        <ButtonSet 
                            draft
                            name='isPublished'
                            value={false}
                            active={!buttonActive}
                            onClick={onPublish}

                        >   Draft
                        </ButtonSet>

                        <ButtonSet
                            name='isPublished'
                            value={true}
                            active={buttonActive}
                            onClick={onPublish}

                        >   Publish
                        </ButtonSet>
                    </div>
                    
                    <Button 
                        onClick={submit}
                        
                    >   Save
                    </Button>
                </div>
            </form>
        </MainContainer>
    )
}


export { Create }
 

/**
 
                    <Button 
                        onClick={submit} 
                        name='publish'
                        
                    >   Publish
                    </Button>

                    <input
                            type='radio'
                            name='isPublished'
                            value={false}
                            checked={data.isPublished === false}
                            onChange={onChange}
                            className='form-radio' />  
                        
                        <h4 style={{ display: 'inline-block', marginRight: '5rem', }}>Draft</h4>

                        <input
                            type='radio' 
                            name='isPublished'
                            value={true}
                            checked={data.isPublished === true}
                            onChange={onChange}
                            className='form-radio' />

                        <h4 style={{ display: 'inline-block', }}>Publish</h4>
 */