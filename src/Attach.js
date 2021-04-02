import React from "react";
import db from "./firebase";

const Attach = () => {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded a file");
    });
  };
  return (
    <div className="attach-container">
      <label className="custom-file-upload">
        <input type="file" onChange={onChange} />
        Attach
      </label>
    </div>
  );
};

export default Attach;
