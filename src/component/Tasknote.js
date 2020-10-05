import React, {useState} from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";

const Tasknote = () => {
  const [renderoncondition,
    setRenderoncondition] = useState(true);
  const [taskadd,
    setTaskadd] = useState("");
  const [arr,
    setArray] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setTaskadd("")
    setArray((oldarray) => {
      return [
        ...oldarray,
        taskadd
      ];
    })
    setRenderoncondition(false);
  }
  const handleChange = (e) => {
    setTaskadd(e.target.value);
  }

  return (
    <React.Fragment>
      <form >
        <div className="tasknote_container">
          <button className="addbutton" onClick={handleClick}>+</button>
          <div className="row">

            <div className="card col-lg-3 col-12  text-center p-3">
              <div className="row">
                <div className="col-6 text-left align-middle">
                  <h4 className="mb-0">My Task</h4>
                </div>
                <div className="col-6 text-right align-middle">
                  <BsThreeDotsVertical className="menubutton"/>
                </div>
                {renderoncondition ? <div className="col-12">
                  <div className="row m-0 p-0">
                    <div className="col-12 m-0 p-0 mt-2 alignbuttonaddtaskandlabel">
                      <input
                        type="text"
                        placeholder="New Task"
                        className="addtaskinput"
                        value={taskadd}
                        onChange={handleChange}/>
                      <button className="addtask" onClick={handleClick}>+</button>
                    </div>
                  </div>
                </div>
                : <div className="row m-0 p-0">
                  <div className="col-12 m-0 p-0 mt-2 alignbuttonaddtaskandlabel">
                    <button className="addtask" id="addtask">+</button>
                    <label for="addtask">Add a task</label>
                  </div>
                </div>
                }
                <div className="col-12">
                  {arr.map((value) => (
                      <div className="row m-0 p-0">
                        <div className="col-3 p-0 m-0"></div>
                        <div className="col-6 p-0 m-0">{value}</div>
                        <div className="col-3 p-0 m-0"></div>
                      </div>
                 
                  ))
}

                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </React.Fragment>
  )
}

export default Tasknote
