import React, {useState} from 'react';
import Select from "react-select";
const AddNewProduct = ({categories , addNewProductHandler}) => {
    const [newProduct , setNewProduct] = useState("");
    const [category , setCategory] = useState("");
    const changeHandler=(event)=>{
        setNewProduct(event.target.value);
    }
    const categoryHandler=(event)=>{
        setCategory(event);
    }
    const options = []
    {
        for (let i = 0; i < categories.length; i++) {
            options.push({value:categories[i] , label:categories[i]})
        }
    }
    const addHandler=()=>{
        if (newProduct === ""){
            alert("Please fill out the product name")
        }else if(category === ""){
            alert("Please select the product category")
        }else {
            addNewProductHandler(newProduct,category.label);
            setCategory("");
            setNewProduct("");
        }
    }
    return (
        <div className={"container"}>
            <h3 className={"title"}>Add New Product</h3>
            <p>enter the product name:</p>
            <input
                type="text"
                value={newProduct}
                onChange={changeHandler}
                className={"input"}
                placeholder={"Product Name"}
            />
            <Select
                onChange={categoryHandler}
                options={options}
                value={category}
                className={"select"}
            />
            <button className={"add"} onClick={addHandler}>ADD</button>
        </div>
    );
};

export default AddNewProduct;
