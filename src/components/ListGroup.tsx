import { useState } from "react";

interface Props {
    items:string[];
    heading:string;
}
function ListGroup(props:Props) {
 

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {props.items.length == 0 && <p>Item not Found !!</p>}
      <ul className="list-group">
        {props.items.map((item, index) => {
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
              onClick={() => setSelectedIndex(index)} //ini yg akan sebabkan nilai selected index berubah
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
