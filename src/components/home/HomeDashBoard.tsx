<<<<<<< Updated upstream
import { User } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import UserCardItem from './UserCardItem'

export const HomeDashBoard = () => {
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
		console.log(users)
	}
	useEffect(() => {
		fetchUser()
	}, [])
=======
import { useGetUsersQuery } from '@/store/api/users'

export const HomeDashBoard = () => {
	const { data, isLoading, isError } = useGetUsersQuery()
>>>>>>> Stashed changes
	return (
		<div className='flex flex-col gap-12 pt-3 px-8'>
			<div>
				<h1>Главная страница</h1>
			</div>
			<div>
				<h2>Недавние мероприятия</h2>
				<div className='bg-secondary h-60 p-8 rounded-lg'></div>
			</div>
			<div className='w-auto'>
				<h2>Возможно, вы знакомы</h2>
<<<<<<< Updated upstream
				<ScrollArea className=' rounded-md bg-secondary'>
					<div className='flex space-x-4 p-4 max-w-[75vw]'>
						{users.map(e => (
							<UserCardItem user={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
=======
				<div className='w-full bg-secondary h-60  p-8 rounded-lg'>
					{data?.map(e => (
						<>{e.fullname}</>
					))}
				</div>
>>>>>>> Stashed changes
			</div>
		</div>
	)
}
