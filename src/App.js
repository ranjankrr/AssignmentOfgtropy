import React, { useState } from 'react';
import './App.css';
import DataList from './DataList';


const App =()=>{
  const [search, setSearch] = useState("");
  const searchBox = (e)=>{
     setSearch(e.target.value);
}
console.log(search);
  return(
    <>
      <input type="search" placeholder='Search first letter your name' onChange={searchBox} value={search}/>
      <table border="1">
           <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Email</th>
                     <th>Mobile</th>
                     <th>Address</th>
                 </tr>
           </thead>
           <tbody>
               {
                 DataList.filter((items)=>items.name.charAt(0).toLowerCase().includes(search)).map((items)=>{
                 return(
                      <tr key={items.id}>
                         <td>{items.id}</td>
                         <td>{items.name}</td>
                         <td>{items.age}</td>
                         <td>{items.email}</td>
                         <td>{items.mobile}</td>
                         <td>{items.address}</td>
                      </tr>
                    
               )})
               }   
           </tbody>
      </table>
     
    </>
  )
}
export default App;