import React, { useState } from 'react';
import "./Main.css";

const Main = () => {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      setTimeout(() => {
        setDiagnosis("This is a sample diagnosis result.");
      }, 2000);
    }
  };

  return (
    <div className='main_body'>
      <div className="main_i">
        <h1>PLANT DISEASE RECOGNITION SYSTEM</h1>
        <div className="chat_container">
          <div className="image_container" onClick={() => document.getElementById('fileInput').click()}>
            {image ? <img src={image} alt="Uploaded" /> : <p>Drag & Drop an Image or Click to Upload</p>}
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="output_container">
            <p>{diagnosis || "Your plant disease diagnosis will appear here."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
