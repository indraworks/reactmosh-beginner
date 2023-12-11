import { useState } from "react";
//import styles from "./ListGroup.module.css";
import styled from "styled-components";

//nama ul
const List = styled.ul`
  list-style: none;
  padding: 10px;
`;

//interface utk props listItem kita buat
interface PropsListItem {
  active: boolean;
}

//nama li
//kalau mau ngolah bahwa props tsb active true maka warna backgroud berubah
// nah kita msukin props dgn tanda ${} sbgai ganti variable
//disini kita mau ngati backround jadi orange kalau si active /yg lagi dklik listitenya
const ListItem = styled.li<PropsListItem>`
  
  padding: 5px 0;
  background:${(props)=>props.active?'orange':''}
`;

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //nah jadi gini utk selectedIndex ini kan suoaya kita tahu
  // yg dclassname ada namanya active nah kita === selectedIndex apakah sama
  //nah nti kan itu haru masuk props sptrti ini karrn  melalui styled dianggap component
  //contoh maka ada props yg masuk distyled component: <ListItem active={} />
  //nah kita mesti buat prope shape atau type prop indentity lewat interface jadi kita buat intefacenya
  //nah kita pasang sgai type idenittynya nnti di componet yg akan dimasuki si props!
  //const ListItem = styled,li<PropsListItem>``;
  //nah tadi si active itu kan propwety dari si className dari list kalau dia actiove maka akan trsorot
  //misalkan warna biru etc nah disini kita akan buat logic pada propsnya

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h2>{heading}</h2>
      {items.length == 0 && <p>Item not Found !!</p>}
      <List>
        {items.map((item, index) => {
          return (
            <ListItem
              //classname kita hapus nnti lewat props utk milih nah props harus dibuatkan
              //interfacenya intinya itu saja ,brikut props active yg udah di asukin sblum dibuat iterface
              active={index === selectedIndex}
              key={item}
              // onClick={()=>console.log(item,index)}
              //onClick={(event) => console.log(event)}
              onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(item);
              }} //ini yg akan sebabkan nilai selected index berubah
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default ListGroup;
/*catatan 2.6 Managing State 







*/
