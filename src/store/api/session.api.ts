import { User } from '@/models/user'
import { api } from './api'

interface UserBody {
	token: string
}

const sessionsApi = api.injectEndpoints({
	endpoints: builder => ({
		getUserData: builder.query<User, string>({
			query: (session: string) => `/comm/session/user?session_id=${session}`,
		}),
		getSession: builder.mutation<{ session: string }, UserBody>({
			query: commentsData => ({
				body: commentsData,
				url: '/comm/session/get',
				method: 'POST',
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
