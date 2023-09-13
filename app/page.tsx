"use client";

import {useState,FormEvent} from "react";

import {useRouter} from 'next/navigation';

export default function Home() {

  const [inputVal,setInputval]=useState("")

  const {push} = useRouter();
  const handleSubmit=(event:FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);

  }
  return (
    <div  className="border border-slate-500 p-4 m-5 ">
      <div>
        <h1>Enter your Name</h1>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input 
        className="bg-red-500 text-white placeholder-blue-800"
        type="text" 
        placeholder="don't look back ..."
        value={inputVal}
        onChange ={(e)=>setInputval(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Predict Data
        </button>
      </form>

      </div>
      </div>
  )
}
