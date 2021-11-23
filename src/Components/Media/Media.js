import React from 'react';
import './Media.css';
import Slider from './Slider';


class Media extends React.Component {

    render(){
        return (
            <div className="media-container">
                <div className="title"><h1>Mainstream Media</h1></div>
                <div className="media">
                <div className="media-box"><Slider /></div>
                    <div className="media-box">
                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/a365bLalJxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="media-box">
                        <iframe src="https://open.spotify.com/embed/playlist/1WrE2Q6rK5MJj9Z3sZO42R?utm_source=generator" title="Spotify player"width="100%" height="450px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Media;