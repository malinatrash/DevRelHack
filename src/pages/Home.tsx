import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const Home = () => {
	const wrapper = 'flex h-screen justify-center items-center select-none'
	const { toast } = useToast()
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className={wrapper}>
				<Button
					variant='outline'
					onClick={() => {
						toast({
							title: 'Scheduled: Catch up ',
							description: 'Friday, February 10, 2023 at 5:57 PM',
							action: (
								<ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
							),
						})
					}}
				>
					Это домашняя страница
				</Button>
			</div>
			<Toaster />
		</ThemeProvider>
	)
}

export default Home
