import React from "react";
import Attach from "./Attach";
import db from "./firebase";
import Form from "./Form";
import TodoList from "./TodoList";
const Home = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="hero-container">
        <Form />
        <TodoList />
        <Attach />
      </div>
    </section>
  );
};

export default Home;
