import { ChatList } from './ChatList'

export const ChatExplorer = () => {
	return (
		<div className='w-full min-h-screen max-h-full flex flex-col gap-12 pt-4 px-8'>
			<h1>Ваши чаты:</h1>
			<div>
				<div className='w-full h-full bg-secondary p-8 rounded-lg'>
					<ChatList />
				</div>
			</div>
		</div>
	)
}
