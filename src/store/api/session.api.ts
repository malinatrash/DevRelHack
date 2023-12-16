import { User } from '@/models/user'
import { api } from './api'

const sessionsApi = api.injectEndpoints({
	endpoints: builder => ({
		getUserData: builder.query<User, string>({
			query: (session: string) =>
				`/comm/session/user?session_id=${session}&format=json`,
		}),
		getSession: builder.mutation<{ session: string }, { token: string }>({
			query: commentsData => ({
				body: commentsData,
				url: '/comm/session/get',
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}),
		}),
	}),
})

export const {
	useGetSessionMutation,
	useGetUserDataQuery,
	useLazyGetUserDataQuery,
} = sessionsApi
export default sessionsApi
