import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'

const Home = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex justify-between'>
				<SideBar />
				<Button variant='default'>Это домашняя страница</Button>
			</div>
			<Toaster />
		</ThemeProvider>
	)
}

export default Home
