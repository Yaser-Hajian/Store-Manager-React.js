import React, {useState} from 'react';
import Select from "react-select";

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
        <div>
            <h3>Add New Product</h3>
            <p>enter the product name:</p>
            <input type="text" value={newProduct} onChange={changeHandler}/>
            <Select
                onChange={categoryHandler}
                options={options}
            />
            <button>ADD</button>
        </div>
    );
};

export default AddNewProduct;
