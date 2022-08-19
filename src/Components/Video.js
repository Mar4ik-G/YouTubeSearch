import React, {useState} from "react";
import VS from './VideoStyle.module.css'

function Videos(props) {
const [clickVideo,setClickVideo] = useState()


    return (
        <div className={VS.mainBlock}>
            {clickVideo
                ?
                <div>
                    <iframe
                        src={`http://www.youtube.com/embed/${props.data.id.videoId}?enablejsapi=1&origin=http://localhost:3000/`}
                        id="player"
                        type="text/html"
                        width="500"
                        height="300">
                    </iframe>

                    <button onClick={() => setClickVideo(false)}>HIDE</button>
                </div>

            :<img className={VS.image}
                  src={props.data.snippet.thumbnails.high.url}
                  onClick={() => setClickVideo(true)}/>}

            <p className="Name">{props.data.snippet.title}</p>
            <p className="Author">{props.data.snippet.channelTitle}</p>
            <p className="Description">{props.data.snippet.description}</p>

        </div>
    )
}

export default Videos;