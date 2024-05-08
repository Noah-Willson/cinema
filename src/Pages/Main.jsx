import React from 'react'
import './main.css'
import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Schedule from './Schedule'
import Trends from './Trends'
import Blog from './Blog'
import Footer from './Footer'


export default function Main() {
    return (
        <main>
            <Schedule />
            <Trends />
            <Blog />
            <Footer />
        </main>
    )
}
