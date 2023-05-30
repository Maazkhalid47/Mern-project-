import React, { useState } from 'react';
import './Sidebar.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaSignOutAlt,
    FaPlus,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Sidebar = ({children}) => {

    const navigate = useNavigate();

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const listStyle = {
        listStyleType: "none",
        color: "white"
    }
    const sideStyle = {
        position: "fixed",

        height: "100vh",
    }
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/AddActivity",
            name:"Add Activity",
            icon: <FaPlus />
        },

        {
            path:"/login",
            name:"Logout",
            icon: <FaSignOutAlt />
        }
    ]
    return (
        <div className="" style={sideStyle} >
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MyFit</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       item.name=='Logout'?
                       <Link style={listStyle} to={item.path} key={index} className="link" activeclassName="active" onClick={()=>{
                            localStorage.clear("Token")
                            location.replace("/login")
                            
                       }}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                       :
                       <Link style={listStyle} to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                   </Link>
                   ))
               }
           </div>
           <main>{children}</main>

        </div>
    );
};

export default Sidebar;