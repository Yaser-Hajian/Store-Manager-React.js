import React, {useState} from 'react';
import Select from "react-select";
import styles from './AddNewProductStyle.module.css'
const AddNewProduct = ({categories}) => {
    const [newProduct , setNewProduct] = useState("");
    const [category , setCategory] = useState("");
    const changeHandler=(event)=>{
        setNewProduct(event.target.value);
    }
    const categoryHandler=(event)=>{
        setCategory(event.label);
    }
    const options = []
    {
        for (let i = 0; i < categories.length; i++) {
            options.push({value:categories[i] , label:categories[i]})
        }
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Add New Product</h3>
            <p>enter the product name:</p>
            <input
                type="text"
                value={newProduct}
                onChange={changeHandler}
                className={styles.input}
                placeholder={"Product Name"}
            />
            <Select
                onChange={categoryHandler}
                options={options}
                className={styles.select}
            />
            <button className={styles.add}>ADD</button>
        </div>
    );
};

export default AddNewProduct;
