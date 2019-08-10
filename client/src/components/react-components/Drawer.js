import React from 'react'
import { ButtonAssembly, } from '../react-components'


const Drawer = () => {
    
    return (
        <div 
            style={{ position: 'absolute', 
                zIndex: 10,
                height: '60vh', 
                width: '19rem', 
                top: '11vh', 
                right: 0,
                padding: '3rem',
                background: '#494949' }} >

            <ButtonAssembly />
        </div>
    )
}


export { Drawer }
