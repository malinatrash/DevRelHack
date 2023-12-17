import { useGetUsersQuery } from '@/store/api/users.api';
import { ChatItem } from './ChatItem';

export const ChatList = () => {
    const { data: users = [], isLoading, isError } = useGetUsersQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching users</p>;
    }

    return (
        <div>
            {users.map((userData) => (
                <ChatItem key={userData.id} user={userData} />
            ))}
        </div>
    );
};