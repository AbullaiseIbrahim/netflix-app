import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { getSelectedMovieId, setSelectedMovieId } from '../../utils/localStorage'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.css';

function Banner({onChange}) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')
    const [isOpen, setOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [wishlist, setWishlist] = useState([])

    useEffect(()=> {
        const getMovieInfo = async() => {
            const movieInfo = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => res.data?.results) || [];

            let movieId = movieInfo?.length
            let selectedMovieId = getSelectedMovieId()

            if(selectedMovieId < movieId-1)
                selectedMovieId = selectedMovieId+1
            else
                selectedMovieId = 0

            setMovie((movieInfo || [])[selectedMovieId] || {})
            setSelectedMovieId(selectedMovieId)

            console.log(movieInfo)

        }
        getMovieInfo()

    }, [])

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.legnth !== 0) {
                setUrlId(response.data.results[0])
                setOpen(true)
            }
            else {
                console.log('Array empty')
            }
        })
    }

    const handleWishlistMovie = async () => {
        if(isClicked) {
            return
        }
        else {
            let movieList = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => res.data?.results) || [];
            let movieId = getSelectedMovieId()
            const wishlistData = wishlist || [];
            const selectedMovie = movieList.find((_, index)=> index === movieId)
            wishlistData.push(selectedMovie)
            setWishlist(wishlistData)
            onChange(wishlist)
            setIsClicked(true)
        }
    };

    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className='banner-wrap'>
            <div className="banner-content">
                <div className="title-col">
                    <h1> {movie? (movie.original_title || movie.title || movie.original_name) : ''} </h1>
                </div>
                <div className="button-col">
                    <button onClick={ () => handleMovie(movie.id) } className='button'><i className="fa-solid fa-play"></i> Play</button>
                    <button onClick={ () => handleWishlistMovie(movie.id) } className='button'><i className="fa-solid fa-plus"></i> { isClicked ? 'Added to Wishlist' : 'My List'}</button>
                </div>
                <div className="desc-col">
                    <p> {movie? movie.overview : ''} </p>
                </div>
            </div>
            <React.Fragment>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={urlId.key} onClose={() => setOpen(false)} />
            </React.Fragment>
        </div>
    )
}

export default Banner