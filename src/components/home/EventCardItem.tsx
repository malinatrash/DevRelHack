import { DevEvent } from '@/models/user'
import { FC } from 'react'

interface IEventCardItem {
	event: DevEvent
}

const EventCardItem: FC<IEventCardItem> = ({ event }) => {
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString)
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		return `${day}.${month}.${year}`
	}

	return (
		<div className='flex flex-col gap-2 items-center bg-secondary p-4 justify-evenly'>
			<img
				src={'https://random.imagecdn.app/500/400'}
				alt={event.name}
				className='w-80 h-40 rounded-lg shadow-md border border-black'
			/>
			<span className='text-center font-medium text-2xl'>{event.name}</span>
			<span className='text-center'>
				{formatDate(event.start_date)} - {formatDate(event.end_date)}
			</span>
			<span className='text-center whitespace-nowrap'>
				Количество участников: {event.users.length}
			</span>
			{/* Можно добавить другие данные о мероприятии или дополнительные элементы */}
		</div>
	)
}

export default EventCardItem
