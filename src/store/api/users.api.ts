import { api } from './api'

interface UserBody {
	id: string
}

const usersApi = api.injectEndpoints({
	endpoints: builder => ({
<<<<<<< Updated upstream:src/store/api/users.api.ts
		getUsers: builder.query({
			query: () => `/user`,
=======
		getUsers: builder.query<User[], null>({
			query: () => {
				return `/user`
			},
>>>>>>> Stashed changes:src/store/api/users.ts
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
