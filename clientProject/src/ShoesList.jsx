import { useEffect, useState } from "react";
import shoes from "./Shoes";

const ShoesList = ({arr, deleteFromArr}) => {
    return (<>
    {arr.length == 0? status=="finush"?<h1>no shoes</h1>:<p>loading...</p>:<ul>
        {arr.map(item=> <li key={item._id}>Shoes remove={deleteFromArr} shoes={item}</li>)}</ul>}
    </>  );
}
 
export default ShoesList;