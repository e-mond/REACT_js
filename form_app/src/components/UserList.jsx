
import React from 'react';
import UserItem from './UserItem'; 
import './styles.css'; 

function UserList(props) {
    return (
        <div>
            <h1>User List Components</h1>
            {props.users.map((user) => (
                <UserItem 
                    key={user.Id} 
                    details={user} 
                    editUser={props.editUser} 
                    removeUser={props.removeUser} 
                />
            ))}
        </div>
    );
}

export default UserList;
