import React from "react";
import { fetchAllTodos, addTodo, removeTodo } from "../apis/todoServices";
export default class WithTodosData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.hanldeAddTodo = this.hanldeAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }

  hanldeAddTodo(newTodo) {
    addTodo(newTodo).then((data) => {
      this.setState((preState) => ({
        todos: [data, ...preState.todos],
      }));
    });
  }

  handleRemoveTodo(id) {
    removeTodo(id).then((data) => {
      this.setState((preState) => ({
        todos: preState.todos.filter((todo) => todo.id !== id),
      }));
    });
  }

  handleCompleteTodo(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((item) => (item.id === id ? { ...item, completed: true } : item)),
    }));
  }

  componentDidMount() {
    fetchAllTodos().then((data) => {
      this.setState({
        todos: data,
      });
    });
  }

  render() {
    if (typeof this.props.render === "function") {
      return this.props.render(this.state.todos, this.hanldeAddTodo, this.handleRemoveTodo, this.handleCompleteTodo);
    } else if (typeof this.props.children === "function") {
      return this.props.children(this.state.todos, this.hanldeAddTodo, this.handleRemoveTodo, this.handleCompleteTodo);
    }

    return null;
  }
}
