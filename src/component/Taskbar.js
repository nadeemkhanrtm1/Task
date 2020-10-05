import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from "../images/logo.png";
import Tasknote from "./Tasknote";

const Taskbar = () => {
  const random = Math.floor(Math.random() * 999);
  const [url,
    setUrl] = useState("");
  useEffect(() => {
    axios
      .get(`https://picsum.photos/id/${random}/info`)
      .then((res) => setUrl(res.data.download_url))
      .catch((err) => console.log(err))
  }, [])
  return (
    <React.Fragment>
      <nav className="taskbar">
        <div className="innerTask">
          <img src={logo} alt="loading" className="userImage"/>
          <h1>TasksBoard</h1>
        </div>
        <img src={url} alt="..." className="userImage"/>
      </nav>
      <Tasknote/>
    </React.Fragment>
  )
}

export default Taskbar
