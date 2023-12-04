import { MouseEvent } from "react";

function ListGroup() {
  let items = ["sepatu", "tas", "kemeja", "kaos", "celdam", "dasi"];
  //kita buat variabel utk SelectedItem
  let SelectedIndex = 3; //kalau dia -1 artinya tidak dipilih karna tidak ada index array yg -1
  //sua mulai dari nol

  return (
    <>
      {items.length == 0 && <p>Item not Found !!</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                SelectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              // onClick={()=>console.log(item,index)}
              //onClick={(event) => console.log(event)}
              onClick={() => (SelectedIndex = index)} //ini yg akan sebabkan nilai selected index berubah
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
/*catatan 2.5 Managing State 
Pada managing state ini kit aakan buat supaya ListItem group yg kita tekan akan tersorot 
jika active 




*/
