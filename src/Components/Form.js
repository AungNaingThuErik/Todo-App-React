import React, { useState } from "react";
import db from "../Firebase/firebase";

export default function Form() {
  const [title, setTitle] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref();
    const fileRef = storageRef.child(`images/${file.name}`);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
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
      fileReference: fileUrl,
    };
    todoRef.push(todo);
    setFileUrl("");
  };
  return (
    <div className="form-container">
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="form-btn" onClick={createTodo}>
        Add Todo
      </button>
      <label className="custom-file-upload">
        <input type="file" onChange={onFileChange} />
        Attach
      </label>
    </div>
  );
}
