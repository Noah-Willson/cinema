import React, { useState, useEffect } from 'react'
import './banner.css'
import BGiMG from '../Images/bg-meg-2.jpeg'
import titleImg from '../Images/meg-2-title.png'
import MovieContent from '../Components/MovieContent';
import MovieDate from '../Components/MovieDate';
import PlayBtn from '../Components/PlayBtn';
import MovieSwiper from '../Components/MovieSwiper';



export default function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json ')
            .then(res => res.json())
            .then(data => {setMovies(data);})
            .catch(e => console.log(e.message))
    }

    useEffect(
        () => {
            fetchData()
        }, [])

    const handleSlideChange = (id) => {

        const newMovies = movies.map(movie => {
            return {
                ...movie,
                active: movie._id === id
            };
        });

        setMovies(newMovies);
    }

    /* v
            const newMovie = movies.map(movie => {
                movie.active = false;
    
                if (movie._id === id) {
                    movie.active = true
                }
    
                return movie;
            });
            console.log(newMovie, 'mlsovdkdov')
            setMovies(...newMovie)*/
    return (
        <div className="banner">
            {
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie">
                        <img src={movie.bgImg} alt="BackgroundImage" className={`bgImg ${movie.active ? 'active' : undefined} `} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie} />
                                    <PlayBtn movie={movie} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />

            }
        </div>
    )
}
