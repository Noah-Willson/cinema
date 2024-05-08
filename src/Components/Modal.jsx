import React from 'react'
import './modal.css'

export default function Modal({ movie, toggleModal, status }) {
    return (

        <div className={`movieModal ${status ? 'active' : undefined } `}>
            <a href="" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon></a>

            <iframe
                width="1280"
                height="720"
                src={movie.video}
                title={`${movie.title} - Official Trailer`}
                frameBorder="0"
                allowFullScreen
            >

            </iframe>
        </div>

    )
}
