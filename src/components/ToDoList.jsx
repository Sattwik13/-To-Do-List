import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div> 
  );
};

export default ToDoList;
