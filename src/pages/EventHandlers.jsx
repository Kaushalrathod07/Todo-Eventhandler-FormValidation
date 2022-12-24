import React from 'react';
import User from './User';

class EventHandlers extends React.Component {
    state = {
        users: [
            {userId: 1001, userName: "joseph_j", userEmail: "joseph_j@gmail.com", userStatus: "active"},

            {userId: 5683, userName: "aws", userEmail: "aws@gmail.com", userStatus: "inactive"},

            {userId: 1278, userName: "steve_s", userEmail: "steve_s@gmail.com", userStatus: "inactive"},

            {userId: 3489, userName: "john_n", userEmail: "john_n@gmail.com", userStatus: "active"}
        ],
        showUsers: true
    };

    usersToggle = () => {
        let doesShow = this.state.showUsers;
        this.setState({
            showUsers: !doesShow
        })
    }

    updateUsers = (userId, userName, userEmail, userStatus) => {
        this.setState({
            users: [
                {userId: 4301, userName: "jo_o", userEmail: "jo_o@gmail.com", userStatus: "inactive"},

                {userId: userId, userName: userName, userEmail: userEmail, userStatus: userStatus},

                {userId: 4637, userName: "jo_j", userEmail: "jo_j@gmail.com", userStatus: "active"}
            ],
        })
    }


    render() {
        let users = null;
        if(this.state.showUsers) {
            users = (<div className='font-bold text-3xl'>{this.state.users.map((user, index) => {return(<div className='col-4'>
            <User userId = {user.userId} userName = {user.userName} userEmail = {user.userEmail} userStatus = {user.userStatus} userUpdate = {() => this.updateUsers(5334, "java", "java@gmail.com", "active")} />
        </div>)})}
        </div>);
        } else {
            users = (<div className='row'>
            <div className='col-12'>
                <p>sorry! we don't have any users data!!</p>
            </div>
        </div>);
        }
        return(
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="">
                <button type='button' className='bg-red-500 rounded-md text-white p-2' onClick={this.usersToggle}> show / hide </button>
                <button type='button' className='bg-blue-500 rounded-md text-white p-2 ml-5' onClick={this.updateUsers.bind(this, 7456, "comrade", "comrade@gmail.com", "inactive")}> update users data </button>
                {/* users */}
                <div className='mt-5'>
                {users}

                </div>


            </div>
        </div>
        );
    }
}

export default EventHandlers;