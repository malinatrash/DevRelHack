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
		name: 'Событие 1',
		start_date: '2023-03-20',
		users: [1, 5, 8, 12, 15],
	},
	{
		id: 2,
		end_date: '2025-09-10',
		event_type: 3,
		name: 'Событие 2',
		start_date: '2023-11-28',
		users: [3, 6, 9],
	},
	{
		id: 3,
		end_date: '2024-08-02',
		event_type: 1,
		name: 'Событие 3',
		start_date: '2023-05-12',
		users: [2, 7, 11],
	},
	{
		id: 4,
		end_date: '2025-04-30',
		event_type: 2,
		name: 'Событие 4',
		start_date: '2023-09-18',
		users: [4, 8, 10, 2],
	},
	{
		id: 5,
		end_date: '2024-11-25',
		event_type: 3,
		name: 'Событие 5',
		start_date: '2023-07-05',
		users: [1, 6, 9, 4],
	},
	{
		id: 6,
		end_date: '2025-03-12',
		event_type: 1,
		name: 'Событие 6',
		start_date: '2023-10-30',
		users: [2, 7, 11, 6],
	},
	{
		id: 7,
		end_date: '2024-10-18',
		event_type: 2,
		name: 'Событие 7',
		start_date: '2023-04-22',
		users: [3, 8, 10],
	},
	{
		id: 8,
		end_date: '2025-07-08',
		event_type: 3,
		name: 'Событие 8',
		start_date: '2023-12-10',
		users: [5, 9, 3, 2],
	},
	{
		id: 9,
		end_date: '2024-05-05',
		event_type: 1,
		name: 'Событие 9',
		start_date: '2023-08-15',
		users: [1, 6, 11, 13, 15],
	},
	{
		id: 10,
		end_date: '2025-01-20',
		event_type: 2,
		name: 'Событие 10',
		start_date: '2023-06-25',
		users: [2, 7, 10, 12, 14],
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
