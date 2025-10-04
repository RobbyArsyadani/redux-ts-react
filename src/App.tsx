import { useDispatch, useSelector } from "react-redux";
import AddTodos from "./features/addTodos/addTodos";
// import { useDispatch } from "react-redux";k
import { deleteTodos, updateTodos } from "./features/addTodos/addSlice";
import { useState } from "react";
// import ListPosts from "./features/axios/listPosts";
import ListProducts from "./features/listProducts/listProducts";

export default function App() {
  const selectTodos = (state) => state.add;
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [editId, setEditId] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTodo(todo.todos);
    setEditCategory(todo.category);
  };
  const handleUpdate = () => {
    dispatch(
      updateTodos({ id: editId, todos: editTodo, category: editCategory })
    );
    setEditId("");
    setEditTodo("");
    setEditCategory("");
  };
  return (
    <>
      <AddTodos />
      <ul>
        {todos.map((a) => (
          <li key={a.id}>
            {a.todos} - {a.category}
            <button onClick={() => dispatch(deleteTodos(a.id))}>Delete</button>
            <button onClick={() => handleEdit(a)}>Edit</button>
          </li>
        ))}
      </ul>
      {editId && (
        <div>
          <h2>Edit Todos</h2>
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <input
            type="text"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
      {/* <ListPosts /> */}
      <ListProducts />
    </>
  );
}

