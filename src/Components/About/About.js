import React from 'react';
import './About.css';
import godzilla from '../../images/godzilla.png';
import pigBall from '../../images/pigball.png';
import pigBall2 from '../../images/pigball2.png';
import cox from '../../images/cast/cox.png';
import downing from '../../images/cast/downing.png';
import edwards from '../../images/cast/edwards.png';
import luhrs from '../../images/cast/luhrs.png';
import martinez from '../../images/cast/martinez.png';
import mcneil from '../../images/cast/mcneil.png';
import miller from '../../images/cast/miller.png';
import murphy from '../../images/cast/murphy.png';
import schempp from '../../images/cast/schempp.png';
import teel from '../../images/cast/teel.png';
import thompson from '../../images/cast/thompson.png';
import willott from '../../images/cast/willott.png';







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
                        <p><i>“Bawdy retellings of of audience members’ anecdotes… for those whose hearts are two sizes too small.” – Seattle Met</i></p>
                        <p><i>“A foul, perverted, and often funny satire of family dysfunction.” – Seattle Weekly</i></p>
                        <p>Directed by Douglas Willott</p>
                        </div>
                        </div>
                        <div className="cast">
                            <div className="pig">
                                <img src={pigBall} alt="Pig Christmas Ornament" className="pigBall" />
                                <h1>Cast</h1>
                                <img src={pigBall2} alt="Pig Christmas Ornament" className="pigBall" />
                            </div>
                            <div className="castPics">
                                <div className="castMember">
                                <img src={cox} alt="Nathan Cox" className="castImg" />
                                <h3>Nathan Cox</h3>
                                </div>
                                <div className="castMember">
                                <img src={downing} alt="Graham Downing" className="castImg" />
                                <h3>Graham Downing</h3>
                                </div>
                                <div className="castMember">
                                <img src={edwards} alt="Nick Edwards" className="castImg" />
                                <h3>Nick Edwards</h3>
                                </div>
                                <div className="castMember">
                                <img src={luhrs} alt="Alison Luhrs" className="castImg" />
                                <h3>Alison Luhrs</h3>
                                </div>
                                <div className="castMember">
                                <img src={martinez} alt="Elena Martinez" className="castImg" />
                                <h3>Elena Martinez</h3>
                                </div>
                                <div className="castMember">
                                <img src={mcneil} alt="Preston McNeil" className="castImg" />
                                <h3>Preston McNeil</h3>
                                </div>
                                <div className="castMember">
                                <img src={miller} alt="Randy Miller" className="castImg" />
                                <h3>Randy Miller</h3>
                                </div>
                                <div className="castMember">
                                <img src={murphy} alt="Uncle Mike Murphy" className="castImg" />
                                <h3>Mike Murphy</h3>
                                </div>
                                <div className="castMember">
                                <img src={schempp} alt="Ian Schempp" className="castImg" />
                                <h3>Ian Schempp</h3>
                                </div>
                                <div className="castMember">
                                <img src={teel} alt="Kayla Teel" className="castImg" />
                                <h3>Kayla Teel</h3>
                                </div>
                                <div className="castMember">
                                <img src={thompson} alt="Stephanie Thompson" className="castImg" />
                                <h3>Stephanie Thompson</h3>
                                </div>
                                <div className="castMember">
                                <img src={willott} alt="Doug Willott" className="castImg" />
                                <h3>Doug Willott</h3>
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}

export default About;