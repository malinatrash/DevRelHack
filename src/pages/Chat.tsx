import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/theme-provider'
import {ChatExplorer} from "../../../DevRelHack2/src/components/chat/ChatExplorer";
import ChatMessagesWindow from "../../../DevRelHack2/src/components/chat/ChatMessagesWindow";
import {ChatHeadear} from "../../../DevRelHack2/src/components/chat/ChatHeadear";

const Chat = () => {
    return (
        <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
            <div className='flex'>
                <SideBar />
                <div className='flex-1 flex flex-col'>
                    <div className='container mx-auto shadow-lg rounded-lg'>
                        <ChatHeadear />
                        <div className='flex'>
                            <ChatExplorer />
                            <ChatMessagesWindow />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Chat
