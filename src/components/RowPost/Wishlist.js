import React, { useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../constants/constants'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.css';

function RowPost(props) {
    const [urlId, setUrlId] = useState('')
    const [isOpen, setOpen] = useState(false)

    const wishlistedMovie = props.selectedArray
    console.log(wishlistedMovie)
    
    const handleMovie = (id)=> {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.legnth !== 0) {
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
                {wishlistedMovie.map((obj)=>
                    <div onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'post-col'} key={obj.id}>
                        <img src={`${imageUrl+obj.poster_path}`} onClick={()=> setOpen(true)} alt="Post Thumbnail" />
                    
                        <div className='movieDetails'>
                            <div className='movieTitle'>
                                <h5>{obj.original_name || obj.original_title || obj.title}</h5>
                            </div>
                            <div className='movieContent'>
                                <p>{obj.overview}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={urlId.key} onClose={() => setOpen(false)} />
		</React.Fragment>
    </div>
    )
}

export default RowPost