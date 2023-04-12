import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import validate from "../middleware/validate";

const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    props.login(userData);
  };

  return (
    // console.log("userData ---->", userData),
    <div>
      <form
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        <div className={styles.formContainer}>
          <div className={styles.formBox}>
            <div className={styles.formGroup}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={(e) => handleInputChange(e)}
              ></input>
              <p className={styles.danger}>{errors.username}</p>
            </div>

            <div className={styles.formGroup}>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                onChange={(e) => handleInputChange(e)}
              ></input>
              <p className={styles.danger}>{errors.password}</p>
            </div>

            <div className={styles.fromButtonBox}>
              <button type="submit" className={styles.formButton}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
