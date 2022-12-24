import React from "react";

class Todositem extends React.Component {
  render() {
    const { userId, id, title, completed } = this.props.todo;

    return (
      <>
        <div className="flex flex-col justify-center ">
          <li className=" ml-10" style={{ listStyle: "none" }}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={completed}
              className=""
              onChange={() => this.props.handleChangeProps(id)}
            />
            <span className="mb-3 ml-5">{title}</span>
            <button
              type="button"
              className=" text-red-500 font-bold p-1 rounded-md ml-2 w-50"
              onClick={() => this.props.deleteTodoProps(id)}
            >
              X
            </button>
          </li>
        </div>
      </>
    );
  }
}

export default Todositem;
