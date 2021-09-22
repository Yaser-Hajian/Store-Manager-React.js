import React, {useState} from 'react';

const AddNewGroup = ({addGroup}) => {
    const [newGroup , setNewGroup] = useState("");
    const changeHandler=(event)=>{
        setNewGroup(event.target.value);
    }
    const addHandler=()=>{
        if (newGroup === ""){
            alert("Please fill out the new group name")
        }else{
            const group={
                name : newGroup,
                members:[],
            }
            addGroup(group);
            setNewGroup("");
        }
    }
    return (
        <div>
            <h3>Add New Group For Products</h3>
            <p>Enter name o the new group:</p>
            <input type="text" value={newGroup} placeholder={"New Group name"} onChange={changeHandler}/>
            <button onClick={addHandler}>ADD</button>
        </div>
    );
};

export default AddNewGroup;
