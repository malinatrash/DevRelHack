export interface User {
	id?: number
	username?: string
	first_name?: string
	last_name?: string
	imageURL?: string
	is_staff?: boolean
	date_joined?: string
	skills?: string[]
	devevents?: DevEvent[]
}

interface DevEvent {
	id: number
	name: string
	start_date: string
	end_date: string
	event_type: number
	users: number[]
}

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
