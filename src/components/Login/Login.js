import { useRef } from "react";
import styles from "./Login.css";
import { FaCheck } from "react-icons/fa";

function Login({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className={styles.loginContainer}>
      <input
        type="text"
        placeholder="Introduce your name..."
        autoFocus
        ref={inputRef}
      />
      <button onClick={handleClick}>
        <FaCheck />
      </button>
    </div>
  );
}

export default Login;