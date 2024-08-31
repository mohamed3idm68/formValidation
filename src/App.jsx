// import { useState } from 'react'

import { useRef, useState } from "react";
import "./index.css";

function App() {
  const [errors, setErrors] = useState([]);
 
  

  const textField = useRef();
  const passField = useRef();

  const ValidateForm = () => {
    let textValue = textField.current.value;
    let passValue = passField.current.value;

    let isFormValid = true;
    const newErrors = [];

    if (textValue.trim() === "") {
      isFormValid = false;
    newErrors.push("name Required");
    }
    if (passValue.trim() === "") {
      isFormValid = false;
     newErrors.push("password Required");
    }

    setErrors(newErrors); // Update errors state with new errors
    return isFormValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ValidateForm();
  };

  return (
    <>
      {errors.length > 0 ? (
        <div className="alert alert-danger" role="alert">
          <strong>Error</strong>
          <ul>
            {errors.map((error, key) => (
              <li key={key}>{error}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <form className="form-control formValid" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="userName"
          ref={textField}
        />
        {errors.values && <span >{errors.values}</span>}
        {/* No need to use errors.values, use errors directly */}
        <input
          className="form-control"
          type="password"
          placeholder="enter password"
          ref={passField}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;

