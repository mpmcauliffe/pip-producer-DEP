import React, { Fragment, useState, } from 'react'
import { Link, } from 'react-router-dom'
import { ButtonAssembly, Drawer, } from '../react-components'
import { Bar, Button, SmallLogo, } from '../styled-components'


const style = {
    menuRow: {
        display: 'flex',
        width: '65vw', 
        justifyContent: 'flex-end',
    }
}

const Navbar = props => {
    const [drawerVisible, setDrawer] = useState(false)

    const toggleDrawer = () => {
        console.log('toggle')
        setDrawer(!drawerVisible)
    }

    const menu = (
        <div style={style.menuRow}>
            <Button onClick={toggleDrawer}>Menu</Button>
        </div>
    )

    return (
        <Fragment>
            <Bar>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/'>
                        <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
                    </Link>
                    
                    {window.innerWidth > 768
                        ?   <ButtonAssembly />
                        :   menu 
                    }
                </div>
            </Bar>
            {drawerVisible && <Drawer toggleDrawer={toggleDrawer} />}
        </Fragment>
        
    )
}


export { Navbar, }


/****  USE WHEN NOT UNDER CONSTRUCTION 
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
            <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
        </Link>
        
        {isAuthenticated 
            && (
                <Link to='/listpage'>
                    <Button>Blog</Button>
                </Link>
            )
        }            
    </div>   

    {isAuthenticated ? welcomeLinks : authLinks}
*/

/****  USE WHEN UNDER CONSTRUCTION
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
            <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
        </Link>
        
        <Link to='/listpage'>
            <Button>Blog</Button>
        </Link>
    </div>
    {constructionLinks}
 */

 //  <p className='welcom' style={{color: '#DAA520', }}>Hello {user && user.name}</p>