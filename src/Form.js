import React, { useState } from "react";
import db from "./firebase";
import Attach from "./Attach";

export default function Form() {
  const [title, setTitle] = useState("");

  // var userId = db.auth().currentUser.uid;
  // console.log(userId);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    var userId = db.auth().currentUser.uid; //current user id
    const todoRef = db.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
    console.log("Create");
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
