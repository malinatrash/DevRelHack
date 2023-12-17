import { DevEvent } from '@/models/user'
import { api } from './api'

const eventsApi = api.injectEndpoints({
	endpoints: builder => ({
		getevents: builder.query<DevEvent[], string>({
			query: (session: string) => `/events?session_id=${session}?format=json`,
		}),
	}),
})

export const { useGeteventsQuery, useLazyGeteventsQuery } = eventsApi
export default eventsApi
