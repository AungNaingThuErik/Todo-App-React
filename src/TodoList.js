import React, { useState, useEffect } from "react";
import db from "./firebase";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = db.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  var userId = db.auth().currentUser.uid;

  var filteredList = [];

  todoList?.forEach((element) => {
    if (element.userId === userId) {
      filteredList.push(element);
    }
  });

  return (
    <div>
      {filteredList
        ? filteredList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ""}
    </div>
  );
}
