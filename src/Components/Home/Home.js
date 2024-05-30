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
                                    <h1>SEE YOUR</h1>
                                    <h1>ASSES IN</h1>
                                    <h1>DECEMBER</h1>
                                </div>
                            {/* <div className="place"> */}
                                {/* <h1>CENTER THEATRE</h1> */}
                                {/* {/* <a href="https://maps.app.goo.gl/gP5DvnoU41rVTWox8"><h2><BiMap/>305 Harrison St.</h2></a> */} 
                            {/* </div>  */}
                            {/* <div className="tickets"> */}
                            {/* {/* <a href="https://www.strangertickets.com/events/145166479/uncle-mike-ruins-christmas"><h1>TICKETS</h1></a> */} 
                            {/*  */}
                            {/* </div> */}
                    </div>
                </div>
            </div>
        </div>

        );
    }            
}

export default Home;