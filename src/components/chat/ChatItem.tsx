import { User } from '@/models/user'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface Props {
	user: User
}

export const ChatItem: FC<Props> = ({ user }) => {
	return (
		<div className='w-full bg-secondary py-8 p-2 rounded-lg flex items-center justify-between'>
			<div className='flex items-center'>
				<Avatar className='w-20 h-20'>
					<AvatarImage src={user.imageURL} />
					<AvatarFallback className='bg-black text-white'>
						{`${user.first_name?.charAt(0) ?? ''}${
							user.last_name?.charAt(0) ?? ''
						}`}
					</AvatarFallback>
				</Avatar>
				<div className='ml-4'>
					<div className='text-xl font-bold'>{`${user.first_name} ${user.last_name}`}</div>
					<div className='text-gray-500'>{user.username}</div>
				</div>
			</div>
			<div className='text-right'>
				<button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
					Начать чат
				</button>
			</div>
		</div>
	)
}
