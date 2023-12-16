export const HomeDashBoard = () => {
	return (
		<div className='w-full min-h-screen max-h-full flex flex-col gap-12 pt-1 px-8'>
			<div>
				<h1>Главная страница</h1>
			</div>
			<div>
				<h2>Недавние мероприятия</h2>
				<div className='w-full bg-secondary h-60 p-8 rounded-lg'></div>
			</div>
			<div>
				<h2>Возможно, вы знакомы</h2>
				<div className='w-full bg-secondary h-60  p-8 rounded-lg'>{}</div>
			</div>
		</div>
	)
}
