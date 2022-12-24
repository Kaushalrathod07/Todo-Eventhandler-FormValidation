import React from "react";
import Todositem from "./Todositem";

class Todoslist extends React.Component {
    render() {
        return(
            <div>
                {this.props.todos.map((todo, index) => (
                    <Todositem
                        key = {todo.id}
                        todo = {todo}
                        handleChangeProps = { this.props.handleChangeProps}
                        deleteTodoProps = {this.props.deleteTodoProps}
                    />
                ))}
            </div>
        );
    }
}

export default Todoslist;