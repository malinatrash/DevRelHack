import { User } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'

export interface AuthDataState extends User {}

const initialState: AuthDataState = {
	first_name: '',
	id: -1,
	last_name: '',
	is_staff: false,
	username: '',
	date_joined: '',
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser: (state, actions) => {
			state = actions.payload
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
