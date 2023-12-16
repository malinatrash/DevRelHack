import {ChatList} from "@/components/chat/ChatList";

export const ChatExplorer = () => {
    return (
        <div className='w-full min-h-screen max-h-full flex flex-col gap-12 pt-1 px-8'>
            <div>
                <h1>Ваши чаты:</h1>
            </div>
            <div>
                <div className='w-full bg-secondary h-180 p-8 rounded-lg'>
                    <ChatList/>
                </div>
            </div>
        </div>
    )
}
