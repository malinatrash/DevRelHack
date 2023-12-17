import SideBar from '@/components/SideBar'
import { ChatExplorer } from '@/components/chat/ChatExplorer'
import { ChatHeadear } from '@/components/chat/ChatHeadear'
import ChatMessagesWindow from '@/components/chat/ChatMessagesWindow'
import { ThemeProvider } from '@/components/theme-provider'

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
