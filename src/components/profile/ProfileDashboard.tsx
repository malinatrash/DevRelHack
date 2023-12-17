import { useAppSelector } from '@/hooks/redux'
import { devevents } from '@/models/user'
import { parseDate } from '@/scripts/dates'
import { FC } from 'react'
import EventCardItem from '../home/EventCardItem'
import { Badge } from '../ui/badge'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

const ProfileDashboard: FC = () => {
	const user = useAppSelector(state => state.userData)

	return (
		<div className='pl-28 pt-8 min-h-screen max-h-full flex flex-col gap-12 px-8'>
			<div>
				<h1>Ваш Профиль {user.first_name}</h1>
			</div>
			<div>
				<h3>Роль: {user.is_staff ? 'Администратор' : 'Пользователь'}</h3>
				<h3>Дата Регистрации: {parseDate(user.date_joined ?? '')} </h3>
				<div className='flex gap-3 w-full bg-secondary pr-32 p-8 rounded-lg mt-20'>
					Ваши Навыки:{' '}
					{user.specs?.map(e => (
						<Badge children={e} />
					))}
				</div>
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
			<div className='w-auto'></div>
		</div>
	)
}
export default ProfileDashboard
