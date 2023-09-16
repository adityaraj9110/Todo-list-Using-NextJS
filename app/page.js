"use client";
import React, {useState } from "react";


const page = () => {
  const [info, setInfo] = useState({
    title: "",
    desc: "",
  });
  const [data,setData] = useState([]);
  const handleChange = (e)=>{
    const {name,value} = e.target;

    setInfo((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const {title,desc} = info;
    setData([...data,{title,desc}]);
    
    
    setInfo({
      title:"",
      desc:""
    })
  }

  const handleDelete = (ind)=>{
    
    const newData = data.filter((ele,i)=>{
      return i!=ind
    })

    setData(newData);
    
  }

  return (
    <>
      <h1 className="bg-black text-center text-5xl p-5 text-white">
        Aditya's Todo-list
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-5  outline-none border-b-8 mx-10 my-5"
          placeholder="Enter title..."
          name="title"
          value={info.title}
          onChange={handleChange}

        />
        <input
          type="text"
          className="p-5  outline-none border-b-8 mx-10 my-5"
          placeholder="Enter Description..."
          name="desc"
          value={info.desc}
          onChange={handleChange}

        />
        <button className="bg-black text-white px-6 py-5 mt-12 mx-10 rounded-2xl ">
          Add Todo
        </button>
      </form>
      <hr />
      <div className="mt-12 p-10 bg-slate-300">
        {data.length===0 ? <><h1>No Data Available!</h1></> :<>
          {
            data?.map((ele,i)=>(
              <div key={i} className="flex justify-between mb-5">
                <h1>{ele.title}</h1>
                <h2>{ele.desc}</h2>
                <button className="bg-black text-white px-6 py-2 rounded-2xl" onClick={()=>{
                  handleDelete(i)
                }}>Remove</button>
              </div>
            ))
          }
        </>}
      </div>

    </>
  );
};

export default page;
