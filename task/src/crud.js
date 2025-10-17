import React, { useState } from "react";
import Navbar from './Navbar';

function Crud() {
    var [ items, setItems ] = useState ([
        { id : 1, name : "John" },
        { id : 2, name : "David" },
        { id : 3, name : "William" }
]);

const [itemName, setItemName ] = useState(" ");

const handleInputChange = (event ) => {
    setItemName(event.target.value);
};

const handleSubmit = ( event ) => {
    event.preventDefault();
    var x = items.length+1;
    var newItem = {
        id : x,
        name : itemName
        };
    setItems([...items, newItem]);
    setItemName(" ");
    };

return (
    <div>
    <div> <Navbar/> </div><br/>
    <div className = "container ">
      <div className = "row" >
          <div className= "col-md-8">
        <h2>CRUD</h2>
        <form onSubmit={handleSubmit} >
            <label> Enter Name </label>
            <input type="text" value={itemName} onChange={handleInputChange}/>
            <button className="btn btn-small btn-success" type="submit"> Add </button>
        </form>
        </div>
        </div>
        </div><br/>
<div className="container">
    <table className =" table table-bordered table-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
        {items.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button className="btn btn-danger">Delete</button>
               <button className="btn btn-primary"> Edit </button>
            </td>
        </tr>
        ))}
</table>
</div>
</div>
);
}

export default Crud;