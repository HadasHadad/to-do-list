"use client"

import Todo from "./Todo";
import { useState, useEffect } from "react";

const getTodos = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/todos', { cache: 'no-store' });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching todos", error);
    }
  };

export default function TodoLIst() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
          const data = await getTodos();
          setTodos(data.todos);
        };
        fetchTodos();
      }, []);
    
      const handleCheckboxChange = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo._id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
      };

      const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
      };
    
      const unfinishedTodos = todos.filter((todo) => !todo.completed);
      const finishedTodos = todos.filter((todo) => todo.completed);
    
      return (
        <div>
          <h2 className="bg-stone-200 text-blue-950 p-2 text-center font-semibold">Unfinished Tasks</h2>
          {unfinishedTodos.map((t) => (
            <Todo key={t._id} todo={t} onCheckboxChange={handleCheckboxChange} onDelete={handleDelete} />
          ))}
    
          <h2 className="bg-stone-200 text-blue-950 p-2 text-center font-semibold mt-10">Finished Tasks</h2>
          {finishedTodos.map((t) => (
            <Todo key={t._id} todo={t} onCheckboxChange={handleCheckboxChange} onDelete={handleDelete}/>
          ))}
        </div>
      )
  
}





