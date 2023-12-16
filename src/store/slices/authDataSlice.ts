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
		setAuth: (state, actions) => {
			state.isAuth = actions.payload
		},
	},
})

export const { setAuth } = authDataSlice.actions

export default authDataSlice.reducer
