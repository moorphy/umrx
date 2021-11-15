import React from 'react';
import '../Home/Footer.css'
class Footer extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }
    render(){
        return (
            <div className="footer">
                <div className="footer-info">
                    <div className = "footer-item">&copy; Copyright, {this.getYear()}</div>
                    <div className = "footer-item">All Rights Reserved</div>
                    <div className="footer-item"><a href="https://moorphy.com">Design by Mike Murphy</a></div>
                </div>
            </div>
        );
    }            
}

export default Footer;