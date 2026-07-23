import { useState } from "react";

function Todo() {
    // localStorage.clear();

    const[name,setname] = useState("");
    const[names,setnames] = useState(()=>{
      const data = localStorage.getItem("todos");
      return data?JSON.parse(data):[];
    });
    


    const handler = (e) =>{
        e.preventDefault();
        const updated = [...names,name];
        setnames(updated);
        localStorage.setItem("todos",JSON.stringify(updated));
        setname("");
    }
    const rem = (index)=>{
        const updated = names.filter((_,indx) => index!=indx);
        setnames(updated);
        localStorage.setItem("todos",JSON.stringify(updated));
    }
  return (
    <>
      <form className="flex justify-around mt-7 mb-2" onSubmit={handler}>
        <input type="text" className="border-2 w-[60%] py-2 rounded-2xl" placeholder="Enter Task" 
        onChange={(e)=>setname(e.target.value)} value={name}/>
        <button type = "submit" className="border-2 w-24 mr-[20%] rounded-xl">Submit</button>
      </form>
      <div className="w-[40%] flex justify-center ml-auto">
        <input type="text" placeholder="Search"
        className="border-2 w-[60%] rounded-2xl py-2" />
        <button className="border-2 w-[10%] rounded-xl" type="button">Search</button>
      </div>

      {names.map((val,indx)=>(
        <div className="flex mt-10 ml-10 mb-2" key={indx}>
            <h2 className="text-3xl w-[65%] border-2 border-blue-400 px-3">{val}</h2>
            <button className="border-2 ml-4 w-[10%] rounded-full bg-blue-500 text-white">completed</button>
            <button className="border-2 w-[10%] content-center ml-5 rounded-2xl bg-gray-300 text-mauve-600 font-bold text-2xl">Edit</button>
            <button className="border-2 w-32 border-red-300 ml-10 bg-red-400 text-white ml-5"
            onClick={()=>rem(indx)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Todo
