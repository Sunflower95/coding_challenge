import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faAlignLeft} from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import '../App.css';

function NavBar(){
    return(
        <>
                <div style={{height:"80px"}}>
                  <ReactBootStrap.Navbar bg="light" variant="light">
                  <ReactBootStrap.Form inline>
                      <div className="input-group" style={{paddingRight:"5em"}}>
                          <input type="text" className="form-control" placeholder="Add More" aria-label="Add More" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <span className="input-group-text" style={{backgroundColor: "#016450"}} id="basic-addon2"><FontAwesomeIcon style={{color:"whitesmoke"}} icon={faSearch} /></span>
                        </div>
                    </div>
                      </ReactBootStrap.Form>
                    <ReactBootStrap.Nav className="mr-auto">
                      <ReactBootStrap.Nav.Link href="#home">Udwell Now</ReactBootStrap.Nav.Link>
                      <ReactBootStrap.Nav.Link href="#features">Sell a property</ReactBootStrap.Nav.Link>
                
                    </ReactBootStrap.Nav>
                    <FontAwesomeIcon icon={faAlignLeft} />
                  </ReactBootStrap.Navbar>
                  </div>
  
        </>
    );
}

export default NavBar;