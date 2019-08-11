import React from 'react'


const BackToTop = () => {

    const toTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <h5
            onClick={toTop}
            style={{ textAlign: 'center', marginTop: '3rem', color: '#930000' }}

        >   back to top &uarr; 
        </h5>
    )
}


export { BackToTop }
