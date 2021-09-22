import React, {useState} from 'react';
import Select from "react-select";

const ListOfProducts = ({categories , category,setCategory , members , setMembers}) => {
    const categoryHandler=(event)=>{
        setCategory(event);
        setMembers(members);
    }
    const options = []
    {
        for (let i = 0; i < categories.length; i++) {
            options.push({value:categories[i] , label:categories[i]})
        }
    }
    return (
        <div className={"container"}>
            <h3 className={"title"}>See List Of Products in Each Category</h3>
            <p>select the category to see that category's products</p>
            <Select
                onChange={categoryHandler}
                options={options}
                value={category}
                className={"select"}
            />
            <div className={"members"}>
                <ul>
                    {
                        members.length ===0?
                            (category === ""?
                                <p className={"info"}>select a category</p>
                                :
                                <p className={"info"}>you don't have any product in this category</p>)

                            :
                            members.map(member=>(
                                <li>{member}</li>
                            ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default ListOfProducts;
