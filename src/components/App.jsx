import react, { useState } from "react"
import { FcEmptyTrash } from "react-icons/fc";

function App () {
  const [newItem, setnewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem () {
    
    if (!newItem) {
      alert("Enter an Item")
      return;
    }


    const item = {
      id: Math.floor(Math.random()* 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setnewItem("");
    
  }
   
  function deleteItem (id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }


  return (
    <div className="Body">
    <h1>ToDoList App</h1>
    <input type="text" placeholder="Add an Item..." value={newItem} 
     onChange={ e => setnewItem (e.target.value) } />
    <button className="button" onClick={ () => addItem()}>Add</button>
    <ul>
      {items.map(item => {
        return ( <div className="Hlist">
          <li className="list" key={item.id}>{item.value} 
          
          </li>
          <button className="listbtn"  onClick={() => deleteItem(item.id)} ><FcEmptyTrash className="delicon" /></button>
          </div>
          
          
          
           
           
        )
      })}
    </ul>
    </div>
  )
}

export default App;