import React, {useEffect, useState, showInput} from "react";
import Videos from "./Video";
import VS from './VideoStyle.module.css'


const Search = () => {

    const key = "AIzaSyCNWRVIZ0j1pzLDVdN7myhgAkoivqJaqTE";
    const maxResults = "10";

    const [data,setData] = useState();

    function requestYT(key, maxResult, message) {
        fetch("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + message)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setData( data.items)
            });
    }
    const [message, setMessage] = useState('');

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            requestYT(key, maxResults, message);
        }
    };

    const handlerClick = (event) => {
        event.preventDefault();
        requestYT(key, maxResults, message);
    }

    return (
        <div className="main">
            <div className={VS.search}>
                <input
                    className={VS.input}
                    placeholder='Пошук'
                    onInput={showInput}
                    type={"text"}
                    id={"message"}
                    name={"message"}
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className={VS.btnSearch} onClick={handlerClick}>
                    <img className={VS.imgForBtn} src="http://cdn.onlinewebfonts.com/svg/img_143015.png" alt=""/>
                </button>
            </div>
            <div className={VS.videoList}>
                {data? data.map(e => <Videos key={e.id.videoId} data={e} />) : null}
            </div>


        </div>
    );
}

export {Search};