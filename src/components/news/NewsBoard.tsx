import { newsMock } from '@/models/news'
import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const NewsBoard: FC = () => {
	const news = newsMock
	return (
		<div className='pl-28 pt-8 min-h-screen max-h-full flex flex-col gap-12 px-8 w-full mr-16'>
			<h1 className='text-3xl font-bold'>Новости</h1>
			{news.map(e => (
				<div
					key={e.id}
					className='bg-white rounded-md shadow-lg p-4 flex justify-between transition-all hover:scale-105'
				>
					<div>
						<h2 className='text-lg font-semibold mb-2'>{e.title}</h2>
						<p className='text-gray-600'>{e.body}</p>
						<p className='text-gray-500 text-sm mt-2'>{e.datetime}</p>
					</div>
					<Avatar className='w-20 h-20'>
						<AvatarImage src={e.sender.imageURL} />
						<AvatarFallback className='bg-black text-white'>
							{`${e.sender.first_name?.charAt(0) ?? ''}${
								e.sender.last_name?.charAt(0) ?? ''
							}`}
						</AvatarFallback>
					</Avatar>
				</div>
			))}
			<div className='w-auto'></div>
		</div>
	)
}

export default NewsBoard
