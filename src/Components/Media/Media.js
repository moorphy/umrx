import React from 'react';
import './Media.css';
import Slider from './Slider';


class Media extends React.Component {

    render(){
        return (
            <div className="media">
                <Slider />
                <div className="video">
                <iframe width="75%" height="700px" src="https://www.youtube.com/embed/a365bLalJxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div> 
        );
    }
}

export default Media;