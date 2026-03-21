import React from 'react'
import {NavLink} from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <>
      <header>
        <div className='content'>
          <div>
            <h1>IT LEARN INSTITUTE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium quos <br /> deserunt neque tempora quam fugiat expedita error, eveniet natus?</p>
            <NavLink to={"/login"} > 
              <button>login</button>
              </NavLink>

          </div>
        </div>
      </header>
    </>
  )
}

export default Home