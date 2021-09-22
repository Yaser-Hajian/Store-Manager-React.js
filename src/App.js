import React, {useEffect, useState} from "react";
import './App.css';
import AddNewGroup from "./Components/AddNewGroup/AddNewGroup";
import AddNewProduct from "./Components/AddNewProduct/AddNewProduct";
import ListOfProducts from "./Components/ListOfProducts/ListOfProducts";

function App() {
    const [groups , setGroups] = useState([]);
    const [categories,setCategories] = useState([]);
    const [category , setCategory] = useState("");
    const [membersForView , setMembersForView] = useState([]);
    useEffect(()=>{
        if (category!==""){
            setMembersForView(getMembersOfCategory(category));
        }
    },[groups ,category ]);
    const addNewGroupHandler=(newGroup)=>{
        const copy_of_groups = [...groups];
        copy_of_groups.push(newGroup);
        setGroups(copy_of_groups);
        const copy_of_categories = [...categories];
        copy_of_categories.push(newGroup.name);
        setCategories(copy_of_categories);
    }
    const addNewProductHandler=(name , category)=>{
        const copy_groups = [...groups];
        const index = groups.findIndex(group => group.name === category);
        const copy_group = {...groups[index]};
        const members = [...copy_group.members];
        members.push(name);
        copy_group.members = members;
        copy_groups[index] = copy_group;
        setGroups(copy_groups);
    }
    const getMembersOfCategory=(category)=>{
        console.log({category})
        const index = groups.findIndex(group => group.name === category.label);
        const members = [...groups[index].members];
        return members;
    }
  return (
    <div className="App">
      <h1>Store Management</h1>
        <AddNewGroup addGroup={addNewGroupHandler}/>
        <AddNewProduct categories={categories} addNewProductHandler={addNewProductHandler}/>
        <ListOfProducts
            categories={categories}
            members={membersForView}
            setMembers={setMembersForView}
            category={category}
            setCategory={setCategory}
        />
    </div>
  );
}

export default App;
