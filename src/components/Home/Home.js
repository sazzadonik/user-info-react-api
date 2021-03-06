import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
const Home = () => {
    const [friends, setFriends] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users/";  
    useEffect(()=> { fetch(url).then(res => res.json()).then(data=>setFriends(data));},[]);
    return (
        <div>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            } 
        </div>
    );
};

export default Home;