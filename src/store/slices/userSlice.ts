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
	imageURL: '',
	skills: [],
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser: (state, actions) => {
			state.date_joined = actions.payload.date_joined
			state.first_name = actions.payload.first_name
			state.id = actions.payload.id
			state.imageURL = actions.payload.imageURL
			state.is_staff = actions.payload.is_staff
			state.skills = actions.payload.skills
			state.username = actions.payload.username
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
