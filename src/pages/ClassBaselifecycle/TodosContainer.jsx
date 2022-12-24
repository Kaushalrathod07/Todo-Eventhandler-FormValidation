import React from "react";

import axios from "axios";
import TodosInput from './TodosInput'
 import { v4 as uuidv4 } from "uuid";


import Todoslist from "./Todoslist";
import TodosHeader from "./TodosHeader";

class TodosContainer extends React.Component {
  state = {
    todos: [],
    show: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => this.setState({ todos: response.data }));
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
      show: !this.state.show,
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
        todos : [
            ...this.state.todos,
            newTodo
        ]
    })
  };

  render() {
    return (
      <div className="">
        <br />
        <h1 className="ml-10 font-bold items-center ">TODOS LIST :</h1>
        <br />
        <hr />
        <br />
        <div className="">
          <div className="">
            {/* Header */}
            <TodosHeader headerSpan={this.state.show} />
          </div>
        </div>

        <div className="">
          <div className="">
            {/* Input - Add Item */}
            <TodosInput addTodoProps={this.addTodoItem} />
          </div>
        </div>

        <div className="">
          <div className=" text-black">
            {/* List */}
            <Todoslist
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodosContainer;
