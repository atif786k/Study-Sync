import React, { useState } from "react";
import InputField from "./InputField";
import "./css/form.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./Firebase";

const Form = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `verification/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
      console.log("File uploaded");
    } catch (err) {
      console.error(err);
    }

    setInputValues({
        input1: "",
        input2: "",
        input3: "",
        // Add more input fields as needed
      });
  };

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    // Add more input fields as needed
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Function to clear all input fields
  const clearAllInputs = () => {
    setInputValues({
      input1: "",
      input2: "",
      input3: "",
      // Add more input fields as needed
    });
  };

  return (
    <>
      <section className="form-section">
        <h2>Submit this form to upload files</h2>
        <div className="form-container grid grid-cols-2 gap-3">
          <InputField
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            label="Name"
          />
          <InputField
            type="email"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            label="Email"
          />
          <InputField
            type="text"
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            label="Subject Name"
          />
          <input
            type="file"
            className="upload-file"
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
          <button onClick={uploadFile} className="submit-form-btn active:bg-green-500">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
