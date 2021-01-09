import React from 'react';
import { SideBarData } from './sideBarData';
import Photo from '../assets/avartar.png';
import '../App.css';
import { Card } from "react-bootstrap";

function SideBar(){
    return(
     
        <div className="Sidebar" >
         <Card>
         <div className="container" >

                <img src={Photo} className="img-responsive center-block img-circle profile" />
                    <h1 id="name">Alex Assenmacher</h1>
                    <p id="buyer">Home Buyer</p>
                    <button className="button">Edit profile</button>

                    </div>
                    <ul className="SidebarList">
                    {SideBarData.map((val, key)=>{
                        return (
                            <li key={key}
                            className="row"
                            onClick={()=> {
                                window.location.pathname =val.link;
                            }}
                            >
                                <div id="title">{val.title}</div><div id="icon">{val.icon}</div>
                            </li>
                        );
                    })}

                    </ul>
         </Card>

        
        
     </div>
    );
}

export default SideBar;