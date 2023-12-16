import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL =
	import.meta.env.MODE === 'mock'
		? 'http://localhost:3001/'
		: 'https://84ab-84-244-42-255.ngrok-free.app/'

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
