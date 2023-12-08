import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h2>{heading}</h2>
      {items.length == 0 && <p>Item not Found !!</p>}
      <ul className={[styles.listGroup, styles.active].join(" ")}>
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              // onClick={()=>console.log(item,index)}
              //onClick={(event) => console.log(event)}
              onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(item);
              }} //ini yg akan sebabkan nilai selected index berubah
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
/*catatan 2.6 Managing State 







*/
