import { useState } from "react";

function Todo() {

    const[name,setname] = useState("");
    const[names,setnames] = useState([]);

    const handler = (e) =>{
        e.preventDefault();
        setnames(prev=>[...prev,name]);
        setname("");
    }
    const rem = (index)=>{
        setnames(prev=> prev.filter((_,indx)=> index!=indx));
    }
  return (
    <>
      <form className="flex justify-around mt-7 mb-2" onSubmit={handler}>
        <input type="text" className="border-2 w-[60%]" placeholder="Enter Task" 
        onChange={(e)=>setname(e.target.value)} value={name}/>
        <button type = "submit" className="border-2 w-24 mr-[20%]">Submit</button>
      </form>

      {names.map((val,indx)=>(
        <div className="flex ml-10 mb-2">
            <h2 key={indx} className="text-3xl w-[75%] border-2 border-blue-400 px-3">{val}</h2>
            <button className="border-2 w-32 border-red-300 bg-red-400 text-white ml-5"
            onClick={()=>rem(indx)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Todo
