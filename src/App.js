import React, {useState} from "react";
import './App.css';
import AddNewGroup from "./Components/AddNewGroup/AddNewGroup";
import AddNewProduct from "./Components/AddNewProduct/AddNewProduct";

function App() {
    const [groups , setGroups] = useState([]);
    const [categories,setCategories] = useState([]);
    const addNewGroupHandler=(newGroup)=>{
        const copy_of_groups = [...groups];
        copy_of_groups.push(newGroup);
        setGroups(copy_of_groups);
        const copy_of_categories = [...categories];
        copy_of_categories.push(newGroup.name);
        setCategories(copy_of_categories);
    }
  return (
    <div className="App">
      <h1>Store Management</h1>
        <AddNewGroup addGroup={addNewGroupHandler}/>
        <AddNewProduct categories={categories}/>
    </div>
  );
}

export default App;
