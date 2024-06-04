"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTodoForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch (`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({newTitle, newDescription}),
      })
      if(!res.ok){
        throw new Error('Failed to update')
      }
      
      router.push('/')
      router.refresh();
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        onChange={(e) => setNewTitle( e.target.value)}
        value= {newTitle}
        type="text"
        placeholder="Todo title"
        className="border border-slate-800 px-8 py-2"
      />
      <input
       onChange={(e) => setNewDescription( e.target.value)}
       value= {newDescription}
        type="text"
        placeholder="Todo description "
        className="border border-slate-800 px-8 py-2"
      />
      <button className="bg-green-600 text-white font-bold py-3 px-4 w-fit">
        Update to-do
      </button>
    </form>
  );
}
