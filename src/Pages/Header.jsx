import React, { useState } from 'react'
import NavListItem from '../Components/NavListItem'
import NavListData from '../Data/NavListData'
import './header.css'
import Search from '../Components/Search'
import Button from '../Components/Button'


export default function Header({ scroll }) {
    const [navList, setNavList] = useState(NavListData)

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => {
            nav.active = false
            if (nav._id === id) nav.active = true;
            return nav
        })
        setNavList(newNavList)
    }

    return (
        <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
            <a href="/" className='logo'>
                Cinema
            </a>
            <ul className='nav'>
                {
                    navList.map(nav => (
                        <NavListItem nav={nav} key={nav._id} navOnClick={handleNavOnClick} />
                    ))
                }

            </ul>
            <Search />
            <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in' />
        </header>
    )
}
