import React from 'react';
import './About.css';
import godzilla from '../../images/godzilla.png';





class About extends React.Component {

      
    render(){

        return (
            <div className='about'>
                <div className="textContainer">
                    <div className="aboutImg">
                    <img src={godzilla} alt="Uncle Mike Godzilla stomping on Xmas town" className="godzilla" /></div>

                     <div className="aboutText">
                     <h1>You better watch out. You better not cry</h1>
                        <p>You write down a heartwarming holiday memory. We re-enact it. Then Uncle Mike ruins it in ways no sane human should be able to imagine.</p>
                        <p>Foul and fun, alarming and charming, come see why audiences return year after year for another serving of Uncle Mike’s special blend of madness.</p>
                        <p>Be warned, this improvised show features mature content and is not suitable for anyone. </p>
                        <p><i>“Bawdy retellings of audience members’ anecdotes… for those whose hearts are two sizes too small.” – Seattle Met</i></p>
                        <p><i>“A foul, perverted, and often funny satire of family dysfunction.” – Seattle Weekly</i></p>
                        <p>Directed by Nick Edwards</p>
                        <br />
                        <br />
                        <div className="contact-box">
<h1>CONTACT</h1>
<h3>General Inquiry:</h3>
<p>uncle@unclemikeruinschristmas.com</p>
<h3>Marketing:</h3>
<p>rob@unclemikeruinschristmas.com</p>
<h3>Production:</h3>
<p>nako@unclemikeruinschristmas.com</p>
<h3>Direction:</h3>
<p>nick@unclemikeruinschristmas.com</p>
</div>
                        </div>
                    </div>

                </div>
    )}
}

export default About;