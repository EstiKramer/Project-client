import { useState, useEffect }  from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg"
import axios from "axios";

const App = () => {
    let [arr, setArr] = useState([]);
    let [status, setStatus]= useState("init")
    const deleteFromArr = (id)=>{
        setArr (arr.filter(item=> item._id!=id))
    }
    const addToArr = (newShoes)=>{
        setArr([...arr, newShoes])
    }
    useEffect(()=>{
        setStatus("pending")
        axios.get("https://project-node-9sow.onrender.com/api/product").then(Response=>{
            console.log(Response);
            setArr(Response.log);
        }).catch(err=>{
            console.log(err);
            alert("sorry, we cant show the products" + err.message)
        }).finally(()=>{
            setStatus(finish)
        })
    },[])
    return (<>
    <AddShoesForm add={addToArr}/>
    <ShoesList arr={arr} deleteFromArr={deleteFromArr}/>
    </>  );
}
 
export default App;