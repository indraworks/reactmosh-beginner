import { MouseEvent } from "react";

function ListGroup() {
  let items = ["sepatu", "tas", "kemeja", "kaos", "celdam", "dasi"];
  //kita ganti let agar bisa di update ukt percobaan iternary operator dan &&
  //items =[]

  //jika kita buat fnction event di luar jsx atau diaas return() maka harus parameternya diberi type anotation
  //atau paramnya yg masuk ke function harus dideclare typenya!
  //contoh :
  const handlerClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      {items.length == 0 && <p>Item not Found !!</p>}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item}
              // onClick={()=>console.log(item,index)}
              //onClick={(event) => console.log(event)}
              onClick={handlerClick}
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
