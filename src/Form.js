import React, { useState } from "react";
import db from "./firebase";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    if (title) {
      alert("Please Enter Todo");
      return;
    }
    //Checked Successfully
    alert("Success");
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = db.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
    console.log("Create");

    var userId = db.auth().currentUser.uid;
    console.log(userId);
  };
  return (
    <div className="form-container">
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="form-btn" onClick={createTodo}>
        Add Todo
      </button>
    </div>
  );
}
