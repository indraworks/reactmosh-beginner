// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
const App = () => {
  // const [showAlert, setShowAlert] = useState(false);

  // function ToggleAlert() {
  //   setShowAlert(!showAlert);
  // }
  let items = ["New York", "SanFransisco", "Delhi", "jakarta"];
  let heading = "Name off City";
  //ini hanya consumer handleItem hanya kasuh abstract headernya ke onselectedItem
  //intinya cousmer si App.tsx tahu bawah item sudah berubah
  const handleItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup items={items} heading={heading} onSelectedItem={handleItem} />
  );
};

export default App;
/*
bagian pertama sudah kita buat kalau gak pake panggil call function diatas utk onClick 
kita akan tulis 
<Button onClick={()=>setShowAlert(true)}

nah sekarang utk bagian ke 2 pada component Alert tambahkan alert-dismissible 
nah utk close tambhakan tombl close nah disini gimana kita juga buat event namanya 
onClose pada interface component anak dgn type function :()=>void
nah kita tinggal kasih event onCLikc pada Buttpn di component alert 
<button onCLick={onCLose}></button>
nah pada App.tsx 
kita tinggal buat utk set yaitu setShowAlert(false)
jadi pada App.tsx 
<Alert onCLose={()=>setAlertShow(false)}
*/
