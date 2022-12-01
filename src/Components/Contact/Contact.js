import React from 'react';
import './Contact.css';
import CallSanta from '../../images/callsanta.png';
import JCI from '../../images/jci.png';

class Contact extends React.Component {
      
    render(){
         
        const Mailto = ({ email, subject = '', body = '', children }) => {
            let params = subject || body ? '?' : '';
            if (subject) params += `subject=${encodeURIComponent(subject)}`;
            if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
          
            return <a href={`mailto:${email} ${params}`}>{children}</a>;
          };


        return (
            <div className='contact-container'>
{/*                 <header>
                <h1>Contact Us</h1>
                </header> */}

{/*                 <div className="contact-box2">
                    <div className="jci"> <img src={JCI} alt="Jet City Improv logo" className="contact-box-photo" /></div>
                    <h3>Information from our Producers: </h3>
                    <div className="contact-box-inner">

                        <div className="contact-box-inner-left">
                            <ul>
                            <li>Online sales close at 2 hours before the start of of the show.</li>
                            <li>Tickets will be available at the door starting 30 minutes before show time (unless sold out).</li> 
                            <li>Masks must be worn at all times, except when eating/drinking</li>
                            </ul>
                        </div>
                        <div className="contact-box-inner-right">
                            <ul>
                            <li>This show will include language and themes not appropriate for younger audiences</li>
                            <li>This show is 90 minutes, including one intermission</li>
                            <li>Beverages for sale in the lobby</li>
                            </ul>
                            </div>
                    </div>
                    <div className="email"> <h4>
                        <Mailto email="oliver@jetcityimprov.org" subject="Uncle Mike Ticket Question"> Email Jet City Improv</Mailto>
                       </h4>
                       </div>
                </div> */}
                <div className="contact-box">
                        <img src={CallSanta} alt="Santa on an Ol timey phone to a little girl" className="contact-box-photo-santa" />
                        <Mailto email="uncle@unclemikeruinschristmas.com" subject="My Cherished Holiday Memory" body="Tell Unky Mike all about it...">
                            <h2>Email Uncle Mike </h2>
                        <h4>Send Uncle Mike a cherished holiday memory and he just might ruin it for you</h4>
                    </Mailto>
                    
                </div>
            </div>
        );
    }
}

export default Contact;