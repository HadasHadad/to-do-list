import Link from "next/link";
import DeleteBtn from "./DeleteBtn";



export default function Todo({ todo, onCheckboxChange , onDelete}) {
  return (
    <div className="flex border border-slate-800 my-3 justify-between p-4" key={todo._id}>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-4"
          checked={todo.completed}
          onChange={() => onCheckboxChange(todo._id)}
        />
        <div>
          <h1 className="text-xl font-bold">{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <DeleteBtn id={todo._id} onDelete={onDelete} />
        <Link href={`/editTodo/${todo._id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
