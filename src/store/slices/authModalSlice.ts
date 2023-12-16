import { createSlice } from '@reduxjs/toolkit'

export interface AuthModalState {
	isShown: boolean
}

const initialState: AuthModalState = {
	isShown: false,
}

export const authModalSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		show: state => {
			state.isShown = true
		},
		hide: state => {
			state.isShown = false
		},
		set: (state, actions) => {
			state.isShown = actions.payload
		},
	},
})

export const { show, hide, set } = authModalSlice.actions

export default authModalSlice.reducer
