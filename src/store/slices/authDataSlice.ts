import { createSlice } from '@reduxjs/toolkit'

export interface AuthDataState {
	isAuth: boolean
}

const initialState: AuthDataState = {
	isAuth: false,
}

export const authDataSlice = createSlice({
	name: 'AuthData',
	initialState,
	reducers: {
		auth: state => {
			state.isAuth = true
		},
		logout: state => {
			state.isAuth = false
		},
	},
})

export const { auth, logout } = authDataSlice.actions

export default authDataSlice.reducer
