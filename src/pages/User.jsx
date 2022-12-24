import React from 'react';

const User = (props) => {

    return(
        <div onClick={props.userUpdate}>
            {props.userStatus === "active" ? (<p style={{color: "#0f0"}}>I am {props.userName}, and my email is {props.userEmail}</p>) : (<p style={{color: "#f00"}}>I am {props.userName}, and my email is {props.userEmail}</p>)}
        </div>
    )
}

export default User;