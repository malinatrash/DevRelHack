import { DevEvent } from '@/models/user'
import { FC } from 'react'

interface IEventCardItem {
	event: DevEvent
}

const EventCardItem: FC<IEventCardItem> = ({ event }) => {
	return <div>EventCardItem</div>
}

export default EventCardItem
