import React, { Component } from 'react'

class TodoInput extends Component {
    state = {
        title: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
    }
    render (){
        return(
            <div className=''>
                <div className=''>
                        <form  onSubmit={this.handleSubmit}>
                            <input type="text" className='mb-3 border-black ml-10 ' placeholder='Enter any item' value={this.state.title} name="title" onChange={this.handleChange} />
                            <button className='bg-blue-500 text-white ml-5 rounded-md p-3' type='submit'> Submit Todo</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default TodoInput