import { useAppSelector } from '@/hooks/redux'
import { setAuth } from '@/store/slices/authDataSlice'
import {
	DoorOpenIcon,
	Mail,
	MessageCircle,
	Search,
	User2Icon,
} from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { ModeToggle } from './ui/modeToggle'

const SideBar = () => {
	const user = useAppSelector(state => state.userData)
	const dispatch = useDispatch()
	const buttonStyles =
		' flex gap-2 transition-all hover:opacity-80 trannsition-all hover:scale-105 text-xl cursor-pointer'
	const navigate = useNavigate()
	return (
		<div className='min-h-screen max-h-full bg-secondary flex gap-4 flex-col px-12 pb-8 items-start justify-between'>
			<div className='flex flex-col gap-4 scale-105'>
				<h1
					onClick={() => navigate('/')}
					className='mt-8 mb-4 text-[2.5rem] font-semibold cursor-pointer transition-all hover:opacity-60 hover:scale-110 flex gap-4 items-center'
				>
					<Avatar className='w-20 h-20'>
						<AvatarImage src={user.imageURL} />
						<AvatarFallback className='bg-black text-white'>
							{`${user.first_name?.charAt(0) ?? ''}${
								user.last_name?.charAt(0) ?? ''
							}`}
						</AvatarFallback>
					</Avatar>{' '}
					{user.first_name ?? ''}
				</h1>
				<div onClick={() => navigate('/profile')} className={buttonStyles}>
					<User2Icon /> <span>Профиль</span>
				</div>
				{user.is_staff && (
					<div className={buttonStyles}>
						<Search /> <span>Поиск</span>
					</div>
				)}
				<div className={buttonStyles}>
					<MessageCircle /> <span>Чаты</span>
				</div>
				{user.is_staff ? (
					<div className={buttonStyles}>
						<Mail /> <span>Рассылки</span>
					</div>
				) : (
					<div className={buttonStyles}>
						<Mail /> <span>Новости</span>
					</div>
				)}
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<Button
					onClick={() => {
						dispatch(setAuth(false))
						document.cookie = 'session=; path=/;'
					}}
					className='flex justify-around transition-all hover:scale-105'
				>
					<DoorOpenIcon /> <span> Выйти</span>
				</Button>
				<ModeToggle />
			</div>
		</div>
	)
}

export default SideBar
