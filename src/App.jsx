import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { MdDarkMode, MdOutlineLightMode  } from "react-icons/md";

function App() {
  // State to hold the list of to-do items , State to track the current input in the add task field,
  // State to manage dark/light theme
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // Toggle the dark class on the root element when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Toggles between light and dark mode
  const toggleTheme = () => setDarkMode(!darkMode);

  // Add a new todo if input is not empty
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  // Delete a todo by filtering it out based on ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit the text of a todo by ID
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 min-h-[600px]">

        {/* Header section with title and theme switch */}
        <div className="flex justify-between items-center mb-4">
          <Header />
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ?  <MdOutlineLightMode className="text-xl" /> : <MdDarkMode className="text-xl" /> }
          </button>
        </div>

        {/* Input section to add new tasks */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow rounded-md px-4 py-2 border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter a new task"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700
            animate-fadeInDown transition-transform duration-300 hover:scale-105"
          >
            Add
          </button>
        </div>

        {/* To-do list display component */}
        <ToDoList todos={todos}
         onDelete={deleteTodo}
         onToggle={toggleComplete} 
         onEdit={editTodo} />

      </div>
    </div>
  );
}

export default App;
