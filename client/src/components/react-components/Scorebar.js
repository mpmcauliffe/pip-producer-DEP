import React from 'react'
import { Bar, ScoreCard, ScoreLabel, ScoreNumber, } from '../styled-components'


const Scorebar = () => {

    //const barRef = useRef()

    const indexes = ['Majors', 'Dollar Index', 'Crosses', 'Commodities']

    // const isOnTop = () => {

    // }


    return (
        <Bar 
            color='#fafafa' 
            border='.1rem solid #ababab' 
            style={{ justifyContent: 'space-evenly', }}
        >
            {indexes.map(label => 
                <ScoreCard 
                    key={label}
                >
                    <ScoreLabel>{label}</ScoreLabel>
                    <ScoreNumber>0.0</ScoreNumber>
                </ScoreCard>    
            )}
        </Bar>

    )
}


export { Scorebar }


/*          <Tabs
                value={0}
                indicatorColor='secondary'
                textColor='primary'
                centered
                style={{ display: 'flex', justifyContent: 'space-around', }}
            >

            const isInView = () => {
                if(imageRef.current) {
                    const rect = imageRef.current.getBoundingClientRect()
                    return rect.top >= 0 && rect.bottom <= window.innerHeight
                }
}
*/