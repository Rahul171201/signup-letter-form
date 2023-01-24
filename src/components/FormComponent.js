import { useState } from "react";
import styles from "../styles/FormComponent.module.css";
import InputComponent from "./InputComponent";

const FormComponent = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className={styles.formContainer}>
      <form className={styles.form}>
        <InputComponent
          placeholder="First Name"
          type="text"
          submitted={submitted}
        ></InputComponent>
        <InputComponent
          placeholder="Last Name"
          type="text"
          submitted={submitted}
        ></InputComponent>
        <InputComponent
          placeholder="Email Address"
          type="email"
          submitted={submitted}
        ></InputComponent>
        <InputComponent
          placeholder="Password"
          type="password"
          submitted={submitted}
        ></InputComponent>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
      <footer className={styles.footer}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">
          <strong>Terms and Conditions</strong>
        </a>
      </footer>
    </main>
  );
};

export default FormComponent;
