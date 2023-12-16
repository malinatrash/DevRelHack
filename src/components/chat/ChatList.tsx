import User from "/db.json"
import {ChatItem} from "@/components/chat/ChatItem";

export const ChatList = () => {
    const {user} = User

    return (
        <div>
            {user.map((userData) => (
                <ChatItem key={userData.id} user={userData}/>
            ))}
        </div>
    )
}

