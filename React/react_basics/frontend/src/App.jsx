import { useState } from "react";
import reactLogo from "/Users/soham/web_Dev/React/react_basics/frontend/src/assets/react.svg";
import viteLogo from "/Users/soham/web_Dev/React/react_basics/frontend/public/vite.svg";
import "./App.css";
import { CreateTodo } from "/Users/soham/web_Dev/React/react_basics/frontend/components/CreateTodo";
import { Todos } from "/Users/soham/web_Dev/React/react_basics/frontend/components/Todos";

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
