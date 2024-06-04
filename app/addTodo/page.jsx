"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
     if(!title){
      alert("Tiltle is required")
      return;
     }
     try {
      const res = await fetch('http://localhost:3000/api/todos', {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({title, description}),
      })
      if (res.ok){
        
       
        router.push('/');
        router.refresh();

      } else{
        throw new Error("failed to create todo item")
      }
     } catch (error) {
      console.log (error)
     }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value= {title}
        type="text"
        placeholder="Todo title"
        className="border border-slate-800 px-8 py-2"
      />
      <input
       onChange={(e) => setDescription(e.target.value)}
       value= {description}
        type="text"
        placeholder="Todo description "
        className="border border-slate-800 px-8 py-2"
      />
      <button className="bg-green-600 text-white font-bold py-3 px-4 w-fit">
        Add to-do
      </button>
    </form>
  );
}
