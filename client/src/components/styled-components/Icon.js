import React, { useRef, } from 'react'
import { SmallIcon } from '../styled-components'


const Icon = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null)

    console.log(primaryImg, '\n', secondaryImg)
    return (
        <SmallIcon 
            onMouseOver={() => {
                imageRef.current.src = secondaryImg
            }} 
            onMouseOut={() => {
                imageRef.current.src = primaryImg
            }}

            src={require(primaryImg)}
            alt='' 
            ref={imageRef}
        />
    )
}


export { Icon }
