import { useState } from "react";


function ListGroup() {
  let items = ["sepatu", "tas", "kemeja", "kaos", "celdam", "dasi"];
  //kita buat variabel utk SelectedItem
  //let SelectedIndex = 3; //kalau dia -1 artinya tidak dipilih karna tidak ada index array yg -1
  //sua mulai dari nol
  //jika ada fucntional component pake react harus gunakan statehook gak bisa dgn variable biasa ubah state
  //karena gak kedetec oleh react rn vairbal biasa statenya tersebuni dalam /inside component 
  //kareba itu wajib pake state ! 
  const [selectedIndex,setSelectedIndex] = useState(0)


  return (
    <>
      {items.length == 0 && <p>Item not Found !!</p>}
      <ul className="list-group">
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
              onClick={() => (setSelectedIndex(index))} //ini yg akan sebabkan nilai selected index berubah
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
