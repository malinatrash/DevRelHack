import SideBar from '@/components/SideBar'
import NewsBoard from '@/components/news/NewsBoard'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { FC } from 'react'

const News: FC = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex items-start'>
				<SideBar />
				<NewsBoard />
			</div>
			<Toaster />
		</ThemeProvider>
	)
}
export default News
