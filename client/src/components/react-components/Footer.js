import React from 'react'
import { Bar, SmallIcon, } from '../styled-components'


const Footer = () => {
 

    return (
        <Bar footer style={{ flexDirection: 'column', padding: '3rem', }}>

            <div style={{ color: '#ababab' }}>
                <h5>Contact</h5>
                <h6>Pip Producers</h6>
                <h6>email</h6>
            </div>
            <div style={{ margin: '0 auto', }}>
                {[1,2,3,4].map(num => {
                    return (
                        <SmallIcon 
                            key={num}
                            src={require(`../../assets/images/svg/${num}.svg`)}
                            alt='social-icon'
                        />
                    )
                })}
                <SmallIcon 
                    src={require('../../assets/images/svg/tradeview.png')}
                    alt='social-icon'   
                />
            </div>
            <div style={{ textAlign: 'center', color: '#696969', }}>
                <h6>Michael Paul McAuliffe 2019 &copy;</h6>
            </div>
        </Bar>
    )
}


export { Footer }