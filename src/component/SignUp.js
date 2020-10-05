import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [state,
    setState] = useState({username: '', email: '', password: ''})
  const history = useHistory();
  const [disabled,setDisabled] = useState(true);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(state));
    history.push("/login")
  }

  const handleDisable = (e) => {
    if(e.target.checked === false){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }
console.log(state)
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginpagecontainer">
        <h1>Sign Up</h1>
        <div className="email">
          <h6 className="username">Username</h6>
          <input
            type='text'
            placeholder="Enter Name"
            name="username"
            value={state.username}
            onChange={handleChange}
            required/>
        </div>
        <div className="email">
          <h6 className="emailh6">Email address</h6>
          <input
            type='text'
            placeholder="Enter Email"
            name="email"
            value={state.email}
            onChange={handleChange}/>
        </div>
        <div className="email password">
          <h6 className="passwordh6">Password</h6>
          <input
            type='text'
            placeholder="Enter Password"
            name="password"
            value={state.password}
            onChange={handleChange}/>
        </div>
        <input type="checkbox" id="checkbox" onClick={handleDisable}/>
        <label for="checkbox" style={{
          left: '-60px'
        }}>I accept the terms & condition</label>
        <button type="submit" disabled={disabled}>Sign up</button>
      </div>
    </form>
  )
}

export default SignUp
