import { User } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import UserCardItem from './userCardItem'

export const HomeDashBoard = () => {
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
		console.log(users)
	}
	useEffect(() => {
		fetchUser()
	}, [])
	return (
		<div className='w-full min-h-screen max-h-full flex flex-col gap-12 pt-3 px-8'>
			<div>
				<h1>Главная страница</h1>
			</div>
			<div>
				<h2>Недавние мероприятия</h2>
				<div className='w-full bg-secondary h-60 p-8 rounded-lg'></div>
			</div>
			<div className='w-auto'>
				<h2>Возможно, вы знакомы</h2>
				<ScrollArea className=' rounded-md border max-w-[1510px]'>
					<div className='flex w-max space-x-4 p-4'>
						{users.map(e => (
							<UserCardItem user={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
		</div>
	)
}
