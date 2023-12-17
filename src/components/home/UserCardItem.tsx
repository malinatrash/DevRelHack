import { User } from '@/models/user'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

interface IUserCardItem {
	user: User
}

const UserCardItem: FC<IUserCardItem> = ({ user }) => {
	const names = `${user.first_name?.charAt(0) ?? ''}${
		user.last_name?.charAt(0) ?? ''
	}`

	return (
		<div className='flex flex-col gap-2 max-w-[10rem] items-center bg-secondary p-4 justify-evenly'>
			<Avatar className='w-16 h-16'>
				<AvatarImage src={user.imageURL} />
				<AvatarFallback className='bg-black text-white'>{names}</AvatarFallback>
			</Avatar>
			<span className='text-center whitespace-break-spaces'>
				{user.first_name + ' ' + user.last_name}
			</span>
			<Button>Написать</Button>
		</div>
	)
}

export default UserCardItem
