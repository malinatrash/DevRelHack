export interface User {
	id?: number
	username?: string
	first_name?: string
	last_name?: string
	imageURL?: string
	is_staff?: boolean
	date_joined?: string
	specs?: string[]
	devevents?: DevEvent[]
}

export interface DevEvent {
	id: number
	name: string
	start_date: string
	end_date: string
	event_type: number
	users: number[]
}

export const devevents: DevEvent[] = [
	{
		id: 1,
		end_date: '2024-06-15',
		event_type: 2,
		name: ' ICPCP',
		start_date: '2023-03-20',
		users: [1, 5, 8, 12, 15],
		// imageURL: 'https://icpc.global/regionals/abouticpc/foundationlogo.png',
	},
	{
		id: 2,
		end_date: '2023-11-20',
		event_type: 3,
		name: 'YandexCup',
		start_date: '2023-11-28',
		users: [3, 6, 9],
	},
	{
		id: 3,
		end_date: '2023-11-2',
		event_type: 1,
		name: 'Медицинский хакатон',
		start_date: '2023-05-12',
		users: [2, 7, 11],
	},
	{
		id: 4,
		end_date: '2025-04-30',
		event_type: 2,
		name: 'Митап JavaRush',
		start_date: '2023-09-18',
		users: [4, 8, 10, 2],
	},
	{
		id: 5,
		end_date: '2024-11-25',
		event_type: 3,
		name: 'Встреча Фронтенд',
		start_date: '2023-07-05',
		users: [1, 6, 9, 4],
	},
]

// export const userMock: User = {
// 	first_name: 'Константин',
// 	is_staff: false,
// 	last_name: 'Воронин',
// 	id: 1,
// 	username: 'Lusya',
// 	imageURL:
// 		'https://www.google.com/url?sa=i&url=https%3A%2F%2F24smi.org%2Fperson%2F9451-kostia-voronin.html&psig=AOvVaw1uHulpMDSLzk2lkZddzQV9&ust=1702820110863000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDTzLGJlIMDFQAAAAAdAAAAABAE',
// 	date_joined: '10.10.2000',
// 	skills: ['Python', 'C++', 'Java'],
// }
