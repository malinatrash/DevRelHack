import { api } from './api'

interface UserBody {
	token: string
}

const sessionsApi = api.injectEndpoints({
	endpoints: builder => ({
		getSession: builder.mutation({
			query: (commentsData: UserBody) => ({
				body: commentsData,
				url: '/comm/session/get',
				method: 'POST',
			}),
		}),
	}),
})

export const { useGetSessionMutation } = sessionsApi
export default sessionsApi
