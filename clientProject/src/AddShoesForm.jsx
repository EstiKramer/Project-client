import {useForm} from "react-hook-form"
import axios from "axios"

const AddBookForm =({add}) => {
let {register, handSubmit} = useForm()
const save = (data) => {
    axios.post("https://project-node-9sow.onrender.com/api/product", data)
    .then(result =>{
        console.log(result)
        alert("shoes added seccefully")
        add(result.data)
    }).catch(err =>{
        alert("broblem\n " +err.message)
    })
}
return(<form onSubmit={handSubmit(save)}>
    <label>name</label>
    <input type="text" {...register("name")}/>
    <label>price</label>
    <input type="number" {...register("price")}/>
    <label>sizes</label>
    <select multiple {...register("sizes")}>
        <option>35</option>
        <option>36</option>
        <option>37</option>
        <option>38</option>
        <option>39</option>
        <option>40</option>
        <option>41</option>
    </select>
    <label>description</label>
    <input type="text" {...register("description")}/>
    <input type="submit" />
</form>)
}