import React from 'react';
import './Home.css';
import umrxImg from '../../images/umrxlogo21.png';

class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <div className="logoBox">
                    <img src={umrxImg} alt="Uncle Mike Ruins Christmas Logo 20201" className="umrxImg"/>
                </div>
                <div className="homeInfo">
                    <div className="homeText">
                        <div className="title1">December</div>
                        <div className="title2">3rd     -     4th</div>
                        <div className="title2">11th</div>
                        <div className="title2">17th    -     18th</div>
                       <br /><br /><br /><br />
                        <div className="title2"> West Of Lenin</div>
                        <div className="title2">203 N 36TH ST</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;