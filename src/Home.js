import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import db from "./Firebase/firebase";

const Home = ({ handleLogout }) => {
  var email = db.auth().currentUser.email;
  var userName = email.substring(0, email.lastIndexOf("@"));
  return (
    <section className="hero">
      <nav>
        <h2>Welcome, {userName}</h2>
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
