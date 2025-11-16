function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
    >
      <span
        className={`flex-1 text-white cursor-pointer transition ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>

      <button
        className="text-red-400 hover:text-red-500 ml-3 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;