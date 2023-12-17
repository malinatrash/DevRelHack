import { User, devevents } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { useLazyGetFriendsQuery } from '@/store/api/probablyFriends.api'
import { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import EventCardItem from './EventCardItem'
import UserCardItem from './UserCardItem'

export const HomeDashBoard = () => {
	const [users, setusers] = useState<User[]>([])
	const { '0': trigger, '1': data } = useLazyGetFriendsQuery()
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
	}

	function getSessionCookie() {
		const cookies = document.cookie.split(';')
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim()
			if (cookie.startsWith('session=')) {
				return cookie.substring('session='.length, cookie.length)
			}
		}
		return null
	}

	const fetchFriends = async () => {
		const sessionValue = getSessionCookie()
		if (sessionValue !== '' && sessionValue !== null) {
			await trigger(sessionValue)
		}
	}

	useEffect(() => {
		fetchUser()
		fetchFriends()
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
						{data.data?.map(e => (
							<UserCardItem key={e.id} user={e} />
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</div>
		</div>
	)
}
