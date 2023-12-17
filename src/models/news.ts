import { User } from './user'

export interface News {
	id: number
	title: string
	body: string
	datetime: string
	sender: User
}
export const newsMock: News[] = [
	{
		id: 1,
		title: 'Приглашение на мероприятие',
		body: 'Мы рады пригласить вас на наше предстоящее мероприятие, которое пройдет...',
		datetime: '2023-12-17T08:30:00Z',
		sender: {
			id: 1,
			username: 'Организатор',
			imageURL: 'https://random.imagecdn.app/200/200',
		},
	},
	{
		id: 2,
		title: 'Отзыв об участии',
		body: 'Было здорово принять участие в мероприятии! Очень интересная программа и замечательные участники.',
		datetime: '2023-12-16T15:00:00Z',
		sender: {
			id: 2,
			username: 'Участник',
			imageURL: 'https://random.imagecdn.app/200/200',
		},
	},
	{
		id: 3,
		title: 'Похвала за активное участие',
		body: 'Хотим выразить благодарность за активное участие в мероприятии!',
		datetime: '2023-12-15T12:45:00Z',
		sender: {
			id: 3,
			username: 'Организатор',
			imageURL: 'https://random.imagecdn.app/200/200',
		},
	},
	{
		id: 4,
		title: 'Приглашение на встречу',
		body: 'Приглашаем вас на нашу следующую встречу, которая состоится...',
		datetime: '2023-12-14T18:20:00Z',
		sender: {
			id: 4,
			username: 'Организатор',
			imageURL: 'https://random.imagecdn.app/200/200',
		},
	},
	{
		id: 5,
		title: 'Отзыв об организации мероприятия',
		body: 'Отлично организованное мероприятие! Спасибо всем за проделанную работу!',
		datetime: '2023-12-13T09:10:00Z',
		sender: {
			id: 5,
			username: 'Участник',
			imageURL: 'https://random.imagecdn.app/200/200',
		},
	},
]
