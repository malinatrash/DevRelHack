import SideBar from '@/components/SideBar'
import { HomeDashBoard } from '@/components/home/HomeDashBoard'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'

const Home = () => {
	const auth = useAuth()
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex justify-between'>
				<SideBar />
				<HomeDashBoard />
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}

export default Home
