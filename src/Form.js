import React, { useState } from "react";
import db from "./Firebase/firebase";
import Attach from "./Attach";

export default function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  //create todos and save it in database
  const createTodo = () => {
    var userId = db.auth().currentUser.uid; //current user id

    const todoRef = db.database().ref("Todo");
    const todo = {
      userId,
      title,
      complete: false,
    };
    todoRef.push(todo);
  };
  return (
    <div className="form-container">
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="form-btn" onClick={createTodo}>
        Add Todo
      </button>
      <Attach />
    </div>
  );
}
