import { useAppSelector } from '@/hooks/redux'
import { DevEvent, User, devevents } from '@/models/user'
import { getSessionCookie } from '@/scripts/getSession'
import { fetchUsers } from '@/store/api/fetchUsers'
import { FC, useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'

const MessageBoard: FC = () => {
	const session = getSessionCookie()
	// const { data } = useGeteventsQuery(session ?? '')

	const data = devevents

	const user = useAppSelector(state => state.userData)
	const [users, setusers] = useState<User[]>([])
	const fetchUser = async () => {
		await fetchUsers().then(r => setusers(r))
	}

	const [ev, setev] = useState<DevEvent>()

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<div className='pl-28 pt-8 min-h-screen max-h-full flex flex-col gap-12 px-8 w-full mr-16'>
			<h1 className='text-3xl font-bold'>Рассылка</h1>
			<div className='flex gap-4'>
				<div className='flex gap-4 items-center'>
					Всем участникам мероприятия:
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Мероприятие' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{data?.map(e => {
									return (
										<SelectItem onClick={() => setev(e)} value={e.name}>
											{e.name}
										</SelectItem>
									)
								})}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			{users.map(e => (
				<div className='bg-secondary px-4 py-8 rounded-xl flex justify-between'>
					<div className='flex items-center space-x-2 pl-8 gap-4'>
						<Checkbox id={(e.id ?? -1).toString()} />

						<div className='flex gap-2'>
							<span className='font-medium block'>{e.first_name}</span>
							<span className='font-medium block'>{e.last_name}</span>
						</div>
					</div>
					<Avatar className='w-20 h-20'>
						<AvatarImage src={e.imageURL} />
						<AvatarFallback className='bg-black text-white'>
							{`${e.first_name?.charAt(0) ?? ''}${
								e.last_name?.charAt(0) ?? ''
							}`}
						</AvatarFallback>
					</Avatar>
				</div>
			))}
			<Textarea placeholder='Что вы хотите сказать?' />
			<Button onClick={() => {}}>Отправить</Button>
			<div className='w-auto'></div>
		</div>
	)
}

export default MessageBoard
