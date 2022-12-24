import React from 'react';

class RestApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json()
            }).then(result => {
                this.setState({
                    posts: result
                });
            });
    }

    render() {
        return(
        <div className="row">
            <div className="col-sm-12 main__content">

                <table className='table'>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>

                    {this.state.posts.map(function(post, index) {
                        return(
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
        );
    }
}


export default RestApi;