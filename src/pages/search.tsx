import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'

const search = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex items-start'>
				<SideBar />
				<searchDashBoard />
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}

export default search
