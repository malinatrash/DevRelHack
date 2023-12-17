import { User } from '@/models/user'
import { fetchUsers } from '@/store/api/fetchUsers'
import { useEffect, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { ChatItem } from './ChatItem'

export const ChatList = () => {
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
	}
	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<ScrollArea className='w-full h-[75vh] rounded-md'>
			{users.map(userData => (
				<ChatItem key={userData.id} user={userData} />
			))}
		</ScrollArea>
	)
}
