import Link from "next/link"

export default function Nav() {
  return (
    <div className="bg-slate-800 flex justify-between py-4 px-8 items-center">
        <Link href='/' className="font-bold text-lg   text-white">To Do List</Link>
        <Link href='/addTodo' className="bg-white text-slate-900 rounded-md p-2">Add to-do</Link>

    </div>
  )
}
