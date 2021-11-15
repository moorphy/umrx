import React from 'react';
import './Home.css';
import './Footer.css';
import Footer from './Footer';
import umrxImg from '../../images/umrxlogo21.png';

class Home extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }
    render(){
        return (
            <div className="wrapper">
            <div className="home">
                <div className="logoBox">
                    <img src={umrxImg} alt="Uncle Mike Ruins Christmas Logo 20201" className="umrxImg"/>
                </div>
                <div className="homeInfo">
                    <div className="homeText">
                        <div className="dates">
                            <h1>December</h1>
                            <h2>3rd  4th  11th <br /> 17th and 18th</h2>
                        </div>
                        <div className="place">
                            <h1>West of Lenin</h1>
                            <h2>203 N 36th St</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

        );
    }            
}

export default Home;