import { useAppSelector } from '@/hooks/redux'
import { User, devevents } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { FC, useEffect, useState } from 'react'
import EventCardItem from '../home/EventCardItem'
import UserCardItem from '../home/UserCardItem'
import { Badge } from '../ui/badge'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

const ProfileDashboard: FC = () => {
	const user = useAppSelector(state => state.userData)
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
	}
	useEffect(() => {
		fetchUser()
	}, [])
	return (
		<div className='pl-28 pt-8 min-h-screen max-h-full flex flex-col gap-12 px-8 w-[75vw]'>
			<div>
				<h1>Профиль</h1>
			</div>
			<div>
				<h3>Роль: {user.is_staff ? 'DevRel' : 'Пользователь'}</h3>
				{!user.is_staff && (
					<div className='flex gap-3 w-full bg-secondary pr-32 p-8 rounded-lg mt-20'>
						Ваши Навыки:{' '}
						{user.specs?.map(e => (
							<Badge children={e} />
						))}
					</div>
				)}
			</div>
			<div>
				<h3>Недавние мероприятия</h3>
				<ScrollArea className=' rounded-md bg-secondary'>
					<div className='flex space-x-4 p-4 max-w-[73vw]'>
						{devevents.map(e => (
							<EventCardItem event={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
			<div className='w-auto'>
				<h3>Вы недавно общались</h3>
				<ScrollArea className=' rounded-md bg-secondary'>
					<div className='flex space-x-4 p-4 max-w-[73vw]'>
						{users.map(e => (
							<UserCardItem key={e.id} user={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
			<div className='w-auto'></div>
		</div>
	)
}
export default ProfileDashboard
