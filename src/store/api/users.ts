import { User } from '@/models/user'
import { api } from './api'

interface UserBody {
	id: string
}

const usersApi = api.injectEndpoints({
	endpoints: builder => ({
		getUsers: builder.query<null, User[]>({
			query: () => {
				return `/user`
			},
		}),
		createUser: builder.mutation({
			query: (commentsData: UserBody) => ({
				body: commentsData,
				url: '/user',
				method: 'POST',
			}),
		}),
	}),
})

export const { useGetUsersQuery, useCreateUserMutation } = usersApi
export default usersApi
