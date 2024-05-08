import React from 'react'
import './footerNavItem.css'

export default function ({ name }) {
    return (
        <li>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <a href="#">{name}</a>
        </li>
    )
}
