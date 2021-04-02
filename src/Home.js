import React from "react";

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
      </div>
    </section>
  );
};

export default Home;
