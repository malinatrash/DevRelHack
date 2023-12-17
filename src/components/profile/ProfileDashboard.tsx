import { useAppSelector } from '@/hooks/redux'
import { FC } from 'react'
import { Badge } from '../ui/badge'

const ProfileDashboard: FC = () => {
	const user = useAppSelector(state => state.userData)

	return (
		<div className='pl-28 pt-8 min-h-screen max-h-full flex flex-col gap-12 px-8'>
			<div>
				<h1>Ваш Профиль {user.first_name}</h1>
			</div>
			<div>
				<h2>Роль: {user.is_staff ? 'Администратор' : 'Пользователь'}</h2>
				<h3>Дата Регистрации: {user.date_joined} </h3>
				<div className='flex gap-3 w-full bg-secondary pr-32 p-8 rounded-lg mt-20'>
					Ваши Навыки:{' '}
					{user.skills?.map(e => (
						<Badge children={e} />
					))}
				</div>
			</div>
			<div className='w-auto'></div>
		</div>
	)
}
export default ProfileDashboard
