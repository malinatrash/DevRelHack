import User from "/db.json"
import avatar from "../../assets/logo.png"
import {Image} from "lucide-react";

export const ChatItem = ({user}) => {

    return (
        <div className='w-full bg-secondary h-60 p-8 rounded-lg'>
            <div><Image src={avatar} alt=""/></div>
            <div>{user.fullname}</div>
        </div>
    )
}

