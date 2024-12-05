import React, { useEffect } from 'react';
import '../App/App.css';
import {BrowserRouter as Router, Link, Routes, Route, Navigate} from 'react-router-dom';
import  {CgMenuRound} from 'react-icons/cg';
import Home from '../Home/Home';
import About from '../About/About';
import Media from '../Media/Media';
import menuImg from '../../images/holly.png';


class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      active: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    
  }
   toggleMenu () {
    const btnState = this.state.active;
    this.setState({ active: !btnState});
  }
  
    render(){  

      function ExternalRedirect() {
        useEffect(() => {
          // Redirect to the external URL
          window.location.href = 'https://www.strangertickets.com/events/159960510/uncle-mike-ruins-christmas';
        }, []);
      
        return null; // No UI needed, just the redirect
      }
      
    return (
      
      <div className="App">
          <div className='main'>
              <div className='menuButton'style={{zIndex:'2'}}><button onClick={this.toggleMenu}> <CgMenuRound /></button></div>
              <Router>
              <div className={this.state.active ? 'menuOn' :'menuOff'} style={{zIndex:'1'}}>
                      <ul onClick={this.toggleMenu}>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                           <li>
                           <a href="https://www.strangertickets.com/events/159960510/uncle-mike-ruins-christmas"><li>Tickets</li></a>
                           </li> 
                          <li>
                          <a href="https://www.google.com/maps/place/Erickson+Theatre/@47.6146665,-122.3217441,15z/data=!4m6!3m5!1s0x54906acc862b9903:0x6071166a29999b2c!8m2!3d47.6146665!4d-122.3217441!16s%2Fg%2F11c5_m02sx?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"><li>Theatre</li></a>
                          </li>
                          <li>
                         <Link to="/about">About</Link>
                          </li>
                          <li>
                          <Link to="/media">Media</Link>
                          </li>
                          <li><img src={menuImg} alt="Holly leaf" className="menuImg" /></li>
                        </ul>
              </div>
                <div className="componentSection">
                  <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        {/* <Route exact path="/tickets" element={<Tickets/>}/> */}
                        <Route exact path="/media" element={<Media/>}/>
                        {/* Redirect /bizcards to the Stranger Tickets URL */}
                        <Route path="/bizcards" element={<ExternalRedirect />} />
                        <Route path="/posters2024" element={<ExternalRedirect />} />
                  </Routes>
                </div>
              </Router>
          </div>
      </div>
    );
  }
}

export default App;