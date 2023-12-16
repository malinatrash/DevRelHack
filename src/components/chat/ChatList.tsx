import React from 'react';
import { useGetUsersQuery } from '../../store/api/users.api'; // Replace with the actual path to usersApi
import { ChatItem } from './ChatItem'; // Replace with the actual path to ChatItem

export const ChatList = () => {
    const { data: users, isLoading, isError } = useGetUsersQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching users</div>;
    }

    return (
        <div>
            {users.map((userData) => (
                <ChatItem key={userData.id} user={userData}/>
            ))}
        </div>
    );
};