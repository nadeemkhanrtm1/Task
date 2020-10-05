import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [disabled,setDisabled] = useState(true);
  const history = useHistory();
  const [state,setState] = useState({email: '', password:''})
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user"))
    if(state.email === data.email && state.password === data.password){
      history.push("/taskbar")
    }else{
      history.push("/")
    }
  }
  const handleDisable = (e) => {
    if(e.target.checked === false){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginpagecontainer">
        <h1>Log in!</h1>
        <div className="email">
          <h6 className="emailh6">Email address</h6>
          <input type='email'
          placeholder="Enter Email"
          name="email"
          value={state.email}
          onChange={handleChange}/>
        </div>
        <div className="email password">
          <h6 className="passwordh6">Password</h6>
          <input type='text'
          placeholder="Enter Password"
          name="password"
          value={state.password}
          onChange={handleChange}/>
        </div>
        <input type="checkbox" id="checkbox" onClick={handleDisable}/>
        <label for="checkbox">Remember me</label>
        <p className="forgetpassword">forget password?</p>
        <button type="submit" disabled={disabled}>LOG IN</button>
      </div>
    </form>
  )
}

export default Login
