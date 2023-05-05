import { useState } from "react";
import styles from "./Liste.module.css";

interface Props {
  list: string[];
}

export default function List(props: Props) {
  return (
    <div className={styles.wrapper}>
      {props.list.map((name: string) => {
        return <ListItem item={name}></ListItem>;
      })}
    </div>
  );
}

function ListItem(props: any) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={isClicked?styles.isClicked:styles.isNotClicked} onClick={() => setIsClicked(!isClicked)}>
      {props.item}
    </div>
  );
}
