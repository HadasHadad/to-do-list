

export default function AddTodo() {
  return (
   <form className="flex flex-col gap-3 mt-4">
    <input type="text" placeholder="Todo title"  className="border border-slate-800 px-8 py-2"/>
    <input type="text" placeholder="Todo description " className="border border-slate-800 px-8 py-2"/>
    <button className="bg-green-600 text-white font-bold py-3 px-4 w-fit">Add to-do</button>
   </form>
  )
}
