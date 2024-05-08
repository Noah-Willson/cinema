import React from 'react'
import './footer.css'
import FooterNavItem from '../Components/FooterNavItem'

export default function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of Services',
        'Privacy Policy'
    ]
    const locations = [
        'Berliin',
        'Munhen',
        'Leipzig',
        'Frankfurt'
    ]


    return (
        <footer id='footer' className='footer'>
            <div className="footer-top">
                <div className="container">

                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Provident totam culpa, saepe dolorem aut eius alias quisquam.
                                Aspernatur, iure saepe?
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter">
                                    <ion-icon name='logo-twitter'></ion-icon>
                                </a>
                                <a href="#" className="facebook">
                                    <ion-icon name='logo-facebook'></ion-icon>
                                </a>
                                <a href="#" className="instagram">
                                    <ion-icon name='logo-instagram'></ion-icon>
                                </a>
                                <a href="#" className="youtube">
                                    <ion-icon name='logo-youtube'></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Usefull links</h4>
                            <ul>
                                {usefulLinks.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Cinemas</h4>
                            <ul>
                                {
                                    locations.map(link => (
                                        <FooterNavItem key={link} name={link} />
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>
                                Contact us
                            </h4>
                            <p>
                                Street name < br />
                                City name, State 12452
                                <br />
                                Germany <br />
                                <br />
                                <strong> Phone: </strong> +31-981731890
                                <br />
                                <strong> Email: </strong> info@example.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>DS studio Tech </span>
                    </strong>
                    .All Rights Reserved
                </div>
                <div className="credits">
                    Designed by Noah <a href="#"> DS studio Tech </a>
                </div>
            </div>


        </footer>
    )
}
