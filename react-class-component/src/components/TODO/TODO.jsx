import React, { Component } from "react";
import { limit50Chars } from "../../utils";

import "./todolist.css";

export default class TODO extends Component {
  render() {
    const { title, id, completed } = this.props.item;
    const { removeTodo, completeTodo } = this.props;
    return (
      <li key={id} className="todo__item">
        <input type="checkbox" className="todo__item__checkbox" checked={completed} onClick={() => completeTodo(id)}></input>
        <p className={completed ? "todo__item__text todo__item__text--completed" : "todo__item__text"}>{limit50Chars(title)}</p>
        <button className="todo__delete-icon" onClick={() => removeTodo(id)}>
          X
        </button>
      </li>
    );
  }
}
