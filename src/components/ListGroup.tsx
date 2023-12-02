

function ListGroup (){
    const items = ["sepatu","tas","kemeja",'kaos',"celdam","dasi"]
    return ( 
        <ul className="list-group">
            {items.map((item)=>{
                return(
                    <li className="list-group-item" key={item}>{item}</li>
                )
            })}
        
       
      </ul>
    )
  
}

export default ListGroup