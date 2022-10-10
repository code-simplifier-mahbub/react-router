import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const{id, name, username, email}= friend;

    return (
        <div>
            <h1>{name}</h1>
            <p><Link to={`/friend/${id}`}>Username: {username}</Link></p>
            <p>{email}</p>
        </div>
    );
};

export default Friend;