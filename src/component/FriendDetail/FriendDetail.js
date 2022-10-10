import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const detail = useLoaderData();
    // console.log(detail);
    const{name, username, email, phone} = detail;
   
    return (
        <div>
            <h1>Friend Name: {name}</h1>
            <p>Email: {email}</p>
            <p>UserName: {username}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;