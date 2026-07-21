import { useState } from "react"

function Form() {
    const[name,setname] = useState("");
    const[names,setnames] = useState([]);


    const handler = (e)=>{
        e.preventDefault();
        setnames(prev => [...prev,name]);
        setname("");
        console.log(e);
    }

    const remove = (indx)=>{
        setnames(prev=>prev.filter((_,index) => indx!=index));
    }

  return (
    <>
      <form onSubmit={handler}>
        <label>UserName: </label>
        <input type="text" className="border-2" value={name} onChange={(e)=>setname(e.target.value)}/><br /><br />
        <label>Password: </label>
        <input type="password" className="border-2"/><br /> <br />
        <button type="submit" className="border-2">Submit</button>
      </form>
      <h3>Data:</h3><br />
      {names.map((person,index)=>(
        <div className="flex">
            <h2 key={index}>{person}</h2>
            <button onClick={()=> remove(index)} className="border-2 mx-5 w-32 border-red-400 bg-red-500 text-white">Delete</button>
        </div>
      ))}
    </>
  )
}

export default Form
