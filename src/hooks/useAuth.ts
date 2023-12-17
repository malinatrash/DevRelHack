import { useToast } from '@/components/ui/use-toast'
import { set } from '@/store/slices/authModalSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from './redux'

export const useAuth = () => {
	const authData = useAppSelector(state => state.authData)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(set(!authData.isAuth))
	}, [authData])

	const { toast } = useToast()
	const navigate = useNavigate()
	const user = useAppSelector(state => state.userData)
	useEffect(() => {
		if (
			user.first_name == '' ||
			user.username == '' ||
			user.date_joined == ''
		) {
			// toast({
			// 	title: 'Ошибка',
			// 	description: 'Войдие в аккаунт, чтобы просматривать эту страницу',
			// 	variant: 'destructive',
			// })
			navigate('/')
		}
	}, [user])
}
