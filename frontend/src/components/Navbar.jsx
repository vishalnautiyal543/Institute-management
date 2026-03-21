import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [navopen, setNavOpen] = useState(false)

  

  return (
  <>
    <div className='nav_container'>
      <div className='logo'>
        <h2>ITL Institute</h2>
      </div>
      <div className='nav_links'>
        <NavLink to={"/"} className={({isActive})=>isActive ? 'active' : 'link'} >Home</NavLink>
        <NavLink to={"/about"} className={({isActive})=>isActive ? 'active' : 'link'} >About</NavLink>
        <NavLink to={"/courses"} className={({isActive})=>isActive ? 'active' : 'link'} >Courses</NavLink>
        <NavLink to={"/dashboard"} className={({isActive})=>isActive ? 'active' : 'link'} >Dashboard</NavLink>
        <NavLink to={"/login"} className={({isActive})=>isActive ? 'active' : 'link'} >Login</NavLink>
      </div>
      <div className="mobile">
        <div className='nav_links_mobile' style={{left:navopen?'0px':'-100%'}}>
          <NavLink onClick={()=>setNavOpen(false)} to={"/"} className={({isActive})=>isActive ? 'active' : 'link'} >Home</NavLink>
          <NavLink onClick={()=>setNavOpen(false)} to={"/about"} className={({isActive})=>isActive ? 'active' : 'link'} >About</NavLink>
          <NavLink onClick={()=>setNavOpen(false)} to={"/courses"} className={({isActive})=>isActive ? 'active' : 'link'} >Courses</NavLink>
          <NavLink onClick={()=>setNavOpen(false)} to={"/login"} className={({isActive})=>isActive ? 'active' : 'link'} >Login</NavLink>
        </div>
      </div>
      <div className='bars' onClick={()=> setNavOpen(prev => !prev)}>
        {
          navopen ? <RxCross2 className='menu_icon' />:<FaBars className='menu_icon' />
        }
        
      </div>
    </div>
  </>
    
  )
}

export default Navbar