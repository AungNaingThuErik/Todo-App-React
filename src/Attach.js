import React from "react";
import db from "./Firebase/firebase";

const Attach = () => {
  const [fileUrl, setFileUrl] = React.useState(null);
  const onChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref();
    const fileRef = storageRef.child(`images/${file.name}`);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    // const fileUrltest = await fileRef.getDownloadURL();
    // if (!fileUrl) {
    //   console.log("null");
    //   return;
    // }

    // console.log(fileUrltest);
  };

  return (
    <div className="attach-container">
      <label className="custom-file-upload">
        <input type="file" onChange={onChange} />
        {/* {!fileUrl ? "Attach" : "View"} */}
        Attach
      </label>
      {/* <img width="100" height="100" src={fileUrl} alt="downloaded" /> */}
    </div>
  );
};

export default Attach;
