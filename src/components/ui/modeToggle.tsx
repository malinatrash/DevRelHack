import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/hooks/useTheme'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<div className='hover:opacity-50'>
			<DropdownMenu>
				<DropdownMenuTrigger
					className='transition-all hover:scale-105 mobile:w-[13vw]  flex gap-3 justify-center w-full'
					asChild
				>
					<Button
						className='mobile:text-[0] mobile:pl-3 flex justify-around px-2  mobile:justify-center'
						variant='outline'
						size='icon'
					>
						<div>
							<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-105 transition-all dark:-rotate-90 dark:scale-0 mobile:ml-[16%]' />
							<Moon className='hidden relative bottom-3 dark:block' />
							<span className='sr-only'></span>
						</div>
						Тема
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Светлая
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>
						Тёмная
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						Системная
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
