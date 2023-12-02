

function ListGroup (){
    let items = ["sepatu","tas","kemeja",'kaos',"celdam","dasi"]
    //kita ganti let agar bisa di update ukt percobaan iternary operator dan && 
     items =[]
    return ( 
        <>
            {items.length == 0 && <p>Item not Found !!</p>}
        <ul className="list-group">
            {items.map((item)=>{
                return(
                    <li className="list-group-item" key={item}>{item}</li>
                )
            })}
        
       
      </ul>
        </>
        
    )
  
}

export default ListGroup