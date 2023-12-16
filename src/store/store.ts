import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import authDataSlice from './slices/authDataSlice'
import authModalSlice from './slices/authModalSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
	reducer: {
		authModal: authModalSlice,
		authData: authDataSlice,
		userData: userSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
