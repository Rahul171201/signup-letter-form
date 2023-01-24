import { useState } from "react";
import styles from "../styles/FormComponent.module.css";

const InputComponent = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        className={
          props.submitted &&
          (text === "" || (props.type === "email" && !text.includes("@")))
            ? styles.submittedInput
            : styles.input
        }
        type={props.type}
        placeholder={props.placeholder}
        required
        onChange={handleChange}
      ></input>
      <div className={styles.errorMessage}>
        <em>
          {props.submitted && text === ""
            ? `${props.placeholder} cannot be empty`
            : props.submitted && !text.includes("@") && props.type === "email"
            ? `This does not look like an email`
            : ``}
        </em>
      </div>
    </div>
  );
};

export default InputComponent;
