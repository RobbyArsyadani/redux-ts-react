import React from "react";
import { addTodos } from "./addSlice";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

export default function AddTodos() {
  const [todo, setTodos] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const data = {
    id: nanoid(5),
    todos: todo,
    category: category,
  };

  return (
    <div className="addTodos">
      <label>
        Todo:{" "}
        <input
          name="todo"
          value={todo}
          onChange={(e) => setTodos(e.target.value)}
        />
      </label>
      <label>
        Category:{" "}
        <input
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button onClick={() => dispatch(addTodos(data))}>Add</button>
    </div>
  );
}

