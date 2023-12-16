import SideBar from '@/components/SideBar'
import ProfileDashboard from '@/components/profile/ProfileDashboard'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { FC } from 'react'

const Profile: FC = () => {
	useAuth()
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex'>
				<SideBar />
				<ProfileDashboard />
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}

export default Profile
