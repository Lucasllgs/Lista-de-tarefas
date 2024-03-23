import React, { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { check } from "prettier";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);


  const onNewTodo = (value) => {
    if(value !=  ''){
      setTodos([
        ...todos,
        {
          id: nextId,
          title: value,
          checked: false
        },
      ]);

      setNextId(prevId => prevId + 1);

    };
  }

  const onToggle = (todo) => {

    setTodos(todos.map((obj) =>
    (obj.id === todo.id
        ? {...obj, checked: !todo.checked}
        : obj
        )
      )
    );

    console.log('toggle', todos)

  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Afazeres...</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      </section>
    </section>
  );
};

export default App;
