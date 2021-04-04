import React, { useState } from "react";
import db from "../Firebase/firebase";
import "../App.css";

export default function Todo({ todo }) {
  const [fileShow, setFileShow] = useState("");
  //delete
  const deleteTodo = () => {
    const todoRef = db.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  //update
  const completeTodo = () => {
    const todoRef = db.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  //view
  const viewTodo = () => {
    var todoRef = db.database().ref("Todo").child(todo.id);
    todoRef.on("value", function (snapshot) {
      var todoList = snapshot.val();
      // console.log("Title: " + todoList.title);
      // console.log("Complete: " + todoList.complete);
      // console.log("File Ref: " + todoList.fileReference);
      setFileShow(todoList.fileReference);
      // console.log(setFileShow(todoList.fileReference));
    });
  };

  return (
    <div className="Todo-container">
      {/* {showFile ? (
        <>
          <img
            className="Todo-img"
            src="https://via.placeholder.com/100x100"
            alt="Uploaded Images"
          />
        </>
      ) : null} */}
      <img className="Todo-img" src={fileShow} alt="file" />

      <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1>

      <div className="buttons">
        <div className="action_btn">
          <button className="action_btn" onClick={deleteTodo}>
            Delete
          </button>
          <button className="action_btn" onClick={completeTodo}>
            {!todo.complete ? "Check" : "Uncheck"}
          </button>
          <button className="action_btn" onClick={viewTodo}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}
