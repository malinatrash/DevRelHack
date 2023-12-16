import {ChatItem} from "@/components/chat/ChatItem";
import usersApi from "@/store/api/users.api";

export const ChatList = () => {
    const user = usersApi

    return (
        <div>
            {user.map((userData) => (
                <ChatItem key={userData.id} user={userData}/>
            ))}
        </div>
    )
}

