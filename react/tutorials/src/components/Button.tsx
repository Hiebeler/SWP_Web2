import { useState } from "react";
import styles from "./Button.module.css";
interface props {
  name: string;
  age: number;
}

export default function Button(props: props) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={isOn ? styles.isOn : styles.isOff}
        onClick={() => setIsOn(!isOn)}
      >
        {props.name} ist {props.age} alt {isOn ? "On" : "Off"}
      </div>
    </div>
  );
}
