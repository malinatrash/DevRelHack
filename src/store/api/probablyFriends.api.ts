import { User } from '@/models/user'
import { api } from './api'

const friendsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFriends: builder.query<User[], string>({
			query: (session: string) =>
				`/comm/session/user/match?session_id=${session}&format=json`,
		}),
	}),
})

export const { useGetFriendsQuery, useLazyGetFriendsQuery } = friendsApi
export default friendsApi
