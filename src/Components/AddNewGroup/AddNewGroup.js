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
        <div className={"container"}>
            <h3 className={"title"}>Add New Group For Products</h3>
            <p>Enter name of the new group:</p>
            <div className={"inputContainer"}>
                <input
                    type="text"
                    value={newGroup}
                    placeholder={"New Group name"}
                    onChange={changeHandler}
                    className={"input"}
                />
                <button onClick={addHandler} className={"add"}>ADD</button>
            </div>

        </div>
    );
};

export default AddNewGroup;
