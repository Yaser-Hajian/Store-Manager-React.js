import React, {useState} from "react";
import './App.css';
import AddNewGroup from "./Components/AddNewGroup/AddNewGroup";

function App() {
    const [groups , setGroups] = useState([]);
    const addNewGroupHandler=(newGroup)=>{
        const copy_of_grops = [...groups];
        copy_of_grops.push(newGroup);
        setGroups(copy_of_grops);
    }
  return (
    <div className="App">
      <h1>Store Management</h1>
        <AddNewGroup addGroup={addNewGroupHandler}/>
    </div>
  );
}

export default App;
