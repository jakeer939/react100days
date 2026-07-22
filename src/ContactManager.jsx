import { useState } from "react"

function ContactManager() {
    const[name,setname] = useState("");
    const[number,setnumber] = useState("");
    const[contact,setcontact] = useState({});

    const handler = (e)=>{
        e.preventDefault();
        const size = number.toString().length;
        for(const name in contact){
            if(contact[name]===number){
                alert("this number already exists");
                setnumber("");
                return;
            }
        }
        if(size === 10){
            setcontact(prev=>({
                ...prev,
                [name]:number
            }));
            setname("");
            setnumber("");
        }
        else{
            window.alert("enter a ten digit phone number");
        }
    };
    const del = (name) => {
        setcontact(prev => {
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    };
  return (
    <>
        <form onSubmit={handler} 
        className="flex w-[100] mt-5 ">
            <label className="ml-7">Enter Details:</label>
            <input placeholder="Enter Name" type="text"  required 
            onChange={(e)=>setname(e.target.value)} value={name}
            className="border-2 w-[30%] mx-5" />
            <input type="number" required
            onChange={(e)=>setnumber(e.target.value)} value={number} placeholder="Enter Number"
            className="border-2 w-[20%] mr-5" />
            <button
            className="border-2 w-[10%] ml-5 bg-green-400 text-white hover:bg-green-600">Submit</button>
        </form>

        <>
            <div className="mt-7 text-center text-2xl font-extrabold w-[100] bg-amber-200 mb-5">Contact Display</div>
            {
                Object.entries(contact).map(([name,number])=>{
                    return <div key={name} 
                            className="flex my-5 w-[100] ml-7">
                        <div className="w-[60%] ">{name}</div>
                        <div className="w-[15%] ">{number}</div>
                        <div className="w-[10%] "><button className="border-2 bg-red-400 text-white w-[100%] 
                        hover:bg-red-600"
                        onClick={()=>del(name)}>Delete</button></div>
                    </div>
                })
            }
        </>
    </>
  )
}

export default ContactManager
