import React from 'react';
import { Link } from 'react-router-dom';
import "./Friend.css"
const Friend = (props) => {
    const {name, email, id} = props.friend;
    return (
        <div className = "friendTitle">
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <h5><Link to = {`/about/${id}`}>About Me</Link></h5>
            <button>Go To Details</button>
            
        </div>
    );
};

export default Friend;