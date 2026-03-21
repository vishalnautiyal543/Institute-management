import React, { useState } from 'react'
import "./Login.css"
import {userLogin} from "../apis/api"
import {useNavigate} from "react-router-dom"


const Login = () => {

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

 const navigate = useNavigate();

  const handleSubmit = async(e) =>{
      e.preventDefault();

      

      try {
        const res = await userLogin({identifier,password})

        console.log(res.data.student.role);
        

        localStorage.setItem("accessToken",res.data.accessToken)
        localStorage.setItem("user",
          JSON.stringify(
            {
              role:res.data.student.role
            }
          )
        )

        setIdentifier("")
        setPassword("")

        navigate('/')

        
        
      } catch (error) {
        console.log(error.response.data.message);
        
      }
     
      
      
  }

  return (
    <>
    {
      
    }
      
      <div className="login_container">
        <div className='form_con'>
        <form className='login_form' onSubmit={handleSubmit}>
          <h3>Login to ITL</h3>
          <div>
            <input 
            type="text" 
            value={identifier}
            onChange={(e)=>setIdentifier(e.target.value)}
            placeholder='enter email or rollno.' 
            />
          </div>
           <div>
            <input 
            type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder='enter password' 
            />
          </div>
          <button>Login</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Login