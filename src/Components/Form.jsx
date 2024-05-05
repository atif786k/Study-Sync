import React from "react";
import InputField from "./InputField";
import "./css/form.css";

const Form = () => {
    return (
        <>
        <section className="form-section">
            <h2>Submit this form to upload files</h2>
            <div className="form-container grid grid-cols-2 gap-3">
                <InputField type="text" label="Name"/>
                <InputField type="email" label="Email"/>
                <InputField type="text" label="Subject Name"/>
                <button className="upload-file">Choose File</button>
                <button className="submit-form-btn">Submit</button>
            </div>
        </section>
        </>
    );
}

export default Form;