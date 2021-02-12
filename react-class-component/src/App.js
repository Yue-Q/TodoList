import React from "react";
import Layout from "./components/layout/layout";
import TodoCounts from "./components/TODO/TodoCounts";
import TodoList from "./components/TODO/todoList";
import WithTodosData from "./renderProps/withTodosData";
import ColorfulTodo from "./components/TODO/colorfulTODO";
import TODO from "./components/TODO/TODO";
import Counter from "./components/counter/counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyRoute } from "./MyRouter/myRouter";
function App() {
  return (
    <Router>
      <Layout>
        <MyRoute exact path="/about" render={() => <h1>About</h1>} />
        <MyRoute exact path="/count">
          <Counter />
        </MyRoute>
        <MyRoute exact path="/todoapp">
          <WithTodosData render={(todos) => <TodoCounts count={todos.length} />} />
          {/* <WithTodosData render={(todos, addTodo, removeTodo)=><TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />} /> */}
          <WithTodosData>
            {(todos, addTodo, removeTodo) => (
              <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo}>
                {(todos, removeTodo) => todos?.map((item) => <TODO item={item} removeTodo={removeTodo} />)}
              </TodoList>
            )}
          </WithTodosData>
        </MyRoute>
        <MyRoute exact path="/" component={Home} />
      </Layout>
    </Router>
  );
}

export default App;

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
