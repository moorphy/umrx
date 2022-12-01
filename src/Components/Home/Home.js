import React from 'react';
import './Home.css';
import umrxImg from '../../images/umrxlogo21.png';
import {BiMap} from 'react-icons/bi';
// import jciBanner from '../../images/jcibanner.png'

class Home extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }
    render(){
        return (
            <div className="wrapper">
                    <div className="home">
                        <div className="homeInfo">
                            <div className="logoBox">
                                <img src={umrxImg} alt="Uncle Mike Ruins Christmas Logo 2022" className="umrxImg"/>
                             </div>
                            <div className="homeText">
                                <div className="dates">
                                    <h1>DECEMBER</h1>
                                    <h2>9th  -  23rd</h2>
                                </div>
                            <div className="place">
                                <h1>WEST OF LENIN</h1>
                                <a href="http://maps.google.com/?q=203 N 36th St Seattle, WA 98103"><h2><BiMap/>203 N 36th St</h2></a>
                            </div>
                            <div className="tickets">
                                
                                <a href="https://www.goelevent.com/UMRX/e/UncleMikeRuinsChristmas"><h1>GET TICKETS</h1></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }            
}

export default Home;