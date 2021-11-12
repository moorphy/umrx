import React from 'react';
import '../App/App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import  {CgMenuRound} from 'react-icons/cg';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Tickets from '../Tickets/Tickets';
import Gallery from '../Gallery/Gallery';
import Memories from '../Memories/Memories';
import Contact from '../Contact/Contact';
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
    return (
      <div className="App">
          <div className='main'>
              <div className='menuButton'style={{zIndex:'2'}}>MENU<button onClick={this.toggleMenu}> <CgMenuRound /></button></div>
              <Router>
              <div className={this.state.active ? 'menuOn' :'menuOff'} style={{zIndex:'1'}}>
                      <ul onClick={this.toggleMenu}>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/tickets">Tickets</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/memories">Memories</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li><img src={menuImg} alt="Holly leaf" className="menuImg" /></li>
                        </ul>
              </div>
                <div className="componentSection">
                  <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/tickets" element={<Tickets/>}/>
                        <Route exact path="/gallery" element={<Gallery/>}/>
                        <Route exact path="/memories" element={<Memories/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                  </Routes>
                </div>
              </Router>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;