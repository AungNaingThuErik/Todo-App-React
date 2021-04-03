import React, { useState } from "react";
import fire from "./Firebase/firebase";
import "./App.css";

export default function Todo({ todo }) {
  //delete
  const deleteTodo = () => {
    const todoRef = fire.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  //update
  const completeTodo = () => {
    const todoRef = fire.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <div className="Todo-container">
      <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1>
      <div className="buttons">
        <div className="action_btn">
          <button className="action_btn" onClick={deleteTodo}>
            Delete
          </button>
          <button className="action_btn" onClick={completeTodo}>
            {!todo.complete ? "Check" : "Uncheck"}
          </button>
        </div>
      </div>
    </div>
  );
}
