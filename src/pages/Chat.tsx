import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/theme-provider'
import {ChatExplorer} from "@/components/chat/ChatExplorer";

const Chat = () => {

    return (
        <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
            <div className='flex justify-between'>
                <SideBar />
                <ChatExplorer/>
            </div>
        </ThemeProvider>
    )
}

export default Chat
