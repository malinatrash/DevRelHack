import { User, devevents } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import EventCardItem from './EventCardItem'
import UserCardItem from './UserCardItem'

export const HomeDashBoard = () => {
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
	}
	useEffect(() => {
		fetchUser()
	}, [])
	return (
		<div className='flex flex-col gap-12 pt-3 px-8'>
			<div>
				<h1>Главная страница</h1>
			</div>
			<div>
				<h2>Недавние мероприятия</h2>
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
				<h2>Возможно, вы знакомы</h2>
				<ScrollArea className=' rounded-md bg-secondary'>
					<div className='flex space-x-4 p-4 max-w-[73vw]'>
						{users.map(e => (
							<UserCardItem key={e.id} user={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
		</div>
	)
}
