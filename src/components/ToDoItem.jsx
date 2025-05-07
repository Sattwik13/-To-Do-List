import { useState } from "react";
import { FaRegEdit, FaSave  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle saving the edited text and exiting edit mode
  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };



  return (
    <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 mb-2 shadow-sm transition">
      <div className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="accent-blue-600 w-5 h-5"
        />

          {isEditing ? (
            // Editable textarea with dynamic height based on content
            <textarea
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              rows={1}
              className="w-full resize-none rounded-md px-2 py-1 text-sm dark:bg-gray-600 bg-gray-100 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            ) : (

            // Display the to-do text  
            <span
              className={`text-sm ${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : "dark:text-white"}`}
            >
              {todo.text}
            </span>
          )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          // Save button when editing
          <button
           onClick={handleEdit}
           className="text-green-600 hover:underline text-sm">
            <FaSave className="text-2xl text-green-600" /></button>
        ) : (
          // Edit button when not editing
          <button
          onClick={() => setIsEditing(true)}
          className="text-blue-600 hover:underline text-sm">
          <FaRegEdit className="text-2xl text-blue-600" /> </button>
        )}
          {/* Delete button */}
        <button
        onClick={() => onDelete(todo.id)}
        className="text-red-600 hover:underline text-sm">
         <MdDelete className="text-2xl text-red-600" /> </button>

      </div>
    </li>
  );
};

export default ToDoItem;
