import React, { useContext } from "react";
import { ThemeContext } from "../..";
import "./LeaveC.css";
import { observer } from "mobx-react";

export const LeaveC = observer((props) => {
  const store = useContext(ThemeContext);
  
  const HandleSumbmit = () => {
    let message = document.querySelectorAll(".leave_comments div textarea")[0]
      .value;
    let input = document.querySelectorAll(".leave_comments div input");
    const data = {
      title: props.title,
      message,
      name: input[0].value,
      Email: input[1].value,
    };
    store.setComments(data);
  };
  console.log(store.Comments)
  return (
    <div className="leave_comments">
      <div>
        <textarea cols="90" rows="10"></textarea>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Emails Address" />
        <div className="submit_comment" onClick={HandleSumbmit}>
          Submit
        </div>
      </div>
    </div>
  );
}
)