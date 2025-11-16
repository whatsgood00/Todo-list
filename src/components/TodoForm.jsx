import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 backdrop-blur-xl border border-white/20 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all shadow-md hover:shadow-blue-500/40"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;