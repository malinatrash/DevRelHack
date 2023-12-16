import {
	DoorOpenIcon,
	Mail,
	MessageCircle,
	Search,
	User2Icon,
} from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './ui/modeToggle'

const SideBar = () => {
	const user = { name: 'Анастасия' }
	const buttonStyles =
		' flex gap-2 transition-all hover:opacity-80 trannsition-all hover:scale-105 text-xl cursor-pointer'
	return (
		<div className='min-h-screen max-h-full bg-secondary flex gap-4 flex-col px-12 pb-8 items-start justify-between'>
			<div className='flex flex-col gap-4 scale-105'>
				<h1 className='mt-8 mb-4 text-[2.5rem] font-semibold'>{user.name}</h1>
				<div className={buttonStyles}>
					<User2Icon /> <span>Профиль</span>
				</div>
				<div className={buttonStyles}>
					<Search /> <span>Поиск</span>
				</div>
				<div className={buttonStyles}>
					<MessageCircle /> <span>Чаты</span>
				</div>
				<div className={buttonStyles}>
					<Mail /> <span>Рассылки</span>
				</div>
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<Button className='flex justify-around transition-all hover:scale-105'>
					<DoorOpenIcon /> <span> Выйти</span>
				</Button>
				<ModeToggle />
			</div>
		</div>
	)
}

export default SideBar
