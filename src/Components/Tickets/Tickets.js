import React from 'react';
import './Tickets.css';
import { RiTicket2Line } from 'react-icons/ri';
import xmasCat from '../../images/xmascat.png';

class Tickets extends React.Component {

      
    render(){
        return (

            <div className='tickets'>
                <div className="ticketHeader">
                    <div className="ticketCat">
                        <img src={xmasCat} alt="Christmas Cat surrounded by holly" className="cat" />
                    </div>
                    <h1>Tickets</h1>
                </div>
                <div className="infoBuy">
                    <div className="ticketInfo">
                        <div className="ticketText">
                            <p className="ticketP">Join Uncle Mike Ruins Christmas at the West of Lenin (203 N. 26th St., Seattle), where these precautions will be put in place for your safety:</p>
                            <ul className="ticketul">
                                <li className="ticketli">Proof of Vaccine must be shown to enter the building (12y/o+). All performers and staff are vaccinated</li>
                                <li className="ticketli">Masks must be worn at all times, except when eating/drinking</li>
                                <li className="ticketli">Social distancing will be maintained in the auditorium: By only selling 50% of the available seats, patrons/groups will be able to be seated apart from other patrons/groups</li>
                                <li className="ticketli">Refusal to comply with mask requirement, or wearing mask improperly (not fully covering mouth and nose) will result in patron being asked to leave the premises and no refund will be given</li>
                                <li className="ticketli">Please do not visit if you have been exposed to anyone who has tested positive for COVID, or if you are experiencing any COVID symptoms</li>
                            </ul>
                            <a href="https://www.jetcityimprov.org/safety-protocols-splash-tf-747412-417832.html" >
                                    <h4>Click for detailed policies</h4>
                                </a>
                            </div>
                    </div>
                    <div className="ticketBuy">

                        <div className="ticket"> 
                            <a href="/" ><h2><RiTicket2Line /></h2><h2>No Tickets Available</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tickets;