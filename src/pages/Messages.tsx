import SideBar from '@/components/SideBar'
import MessageBoard from '@/components/messages/MessageBoard'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const Messages = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex items-start'>
				<SideBar />
				<MessageBoard />
			</div>
			<Toaster />
		</ThemeProvider>
	)
}

export default Messages
