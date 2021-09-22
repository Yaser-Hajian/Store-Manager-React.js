import React, {useState} from 'react';
import styles from './AddNewGroupStyle.module.css'
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
        <div className={styles.container}>
            <h3 className={styles.title}>Add New Group For Products</h3>
            <p>Enter name o the new group:</p>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newGroup}
                    placeholder={"New Group name"}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <button onClick={addHandler} className={styles.add}>ADD</button>
            </div>

        </div>
    );
};

export default AddNewGroup;
