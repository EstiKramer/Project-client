import axios from "axios";

const shoes =({shoes, remove})=>{
    return(<div>
        <h2>{shoes.name}</h2>
        <h3>{shoes.price}</h3>
        <ul>
            מידות
            {shoes.sizes.map(iten => <li  key={item}> {item}</li>)}
        </ul>
        <input type="button" value=" " onClick={()=>{
            axios.delete(`https://project-node-9sow.onrender.com/api/product/${shoes._id}`).then(result=>{
                console.log(result)
                alert("item: "+ result.data.name + " succesfully deleted")
                remove(shoes._id)
            }).catch (err=>{
                alert("we cant delete this item\n + err.message")
                    console.log(err)
                })
            
        }}/>
    </div>)
}

export default shoes;