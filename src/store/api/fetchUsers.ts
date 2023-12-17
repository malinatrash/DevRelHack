import { User } from '@/models/user'
import axios from 'axios'

export const fetchUsers = async () => {
	try {
		const response = await axios.get<User[]>('http://localhost:3001/user')

		return response.data
	} catch (error) {
		return []
	}
}
