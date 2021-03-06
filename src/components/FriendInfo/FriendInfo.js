import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendInfo = () => {
    const {friendId} = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data =>setFriend(data));
    });
    return (
        <div>
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendInfo;