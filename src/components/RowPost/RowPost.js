import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../constants/constants'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(Response=>{
            console.log(Response)
            setmovies(Response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id)=> {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.legnth != 0) {
                setUrlId(response.data.results[0])
            }
            else {
                console.log('Array empty')
            }
        })
    }
    
    return (
    <div className='post-wrap'>
        <div className="post-container">
            <div className="title-col">
                <h2>{props.title}</h2>
            </div>
            <div className="post-row">
                {movies.map((obj)=> 
                    <div onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'post-col'}>
                        <img src={`${imageUrl+obj.backdrop_path}`} alt="Post Thumbnail" />
                    </div>
                )}
            </div>
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
    )
}

export default RowPost