import React from 'react';
import '../App/App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import  {CgMenuRound} from 'react-icons/cg';
import Home from '../Home/Home';
import Footer from '../Home/Footer';
import About from '../About/About';
// import Tickets from '../Tickets/Tickets';
import Media from '../Media/Media';
// import Memories from '../Memories/Memories';
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
              <div className='menuButton'style={{zIndex:'2'}}><button onClick={this.toggleMenu}> <CgMenuRound /></button></div>
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
                           <a href="https://www.strangertickets.com/events/145166479/uncle-mike-ruins-christmas"><li>Tickets</li></a>
                          </li> 
                          <li>
                            <Link to="/media">Media</Link>
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
                        {/* <Route exact path="/tickets" element={<Tickets/>}/> */}
                        <Route exact path="/media" element={<Media/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                  </Routes>
                </div>
              </Router>
          </div>
      </div>
    );
  }
}

export default App;