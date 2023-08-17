import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'

const UserReg = () => {
  const [input, setinput] = useState(
    {
        Fname:"",
        Lname:"",
        email:" ",
        password:" ",
    }
)
const getInput=(e)=>{
  setinput({...input,[e.target.name]: e.target.value})
}

  return (
    <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            Create Events <br />
            <span className="text-primary">share happiness</span>
          </h1>
          {/* <p style={{color:' hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p> */}
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
               
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input 
                      type="text" 
                      id="form3Example1" 
                      className="form-control" 
                      onChange={getInput} 
                      name='Fname' 
                      required
                      />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input 
                      type="text" 
                      id="form3Example2" 
                      className="form-control" 
                      onChange={getInput} 
                      name='Lname' 
                      required
                      />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input 
                  type="email" 
                  id="form3Example3" 
                  className="form-control" 
                  onChange={getInput}
                  name='email'
                  required
                  />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input 
                  type="password" 
                  id="form3Example4" 
                  className="form-control" 
                  onChange={getInput} 
                  name='password'
                  required
                  />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>
                <button type="submit" className="btn btn-dark btn-block mb-4 ">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserReg