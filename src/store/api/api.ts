import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL =
	import.meta.env.MODE === 'mock' ? 'http://localhost:3001/' : 'какой-то апи'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		mock: builder.query<null, null>({
			query: () => '/',
		}),
	}),
})
