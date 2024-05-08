import React from 'react'
import './navListItem.css'


export default function NavListItem({ nav, navOnClick }) {
    return (
        <li>
            <a href={nav.link} className={`${nav.active ? 'active' : undefined }`} onClick={() => { navOnClick(nav._id) }}> {nav.name} </a>
        </li>

    )
}
