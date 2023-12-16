import { set } from '@/store/slices/authModalSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useAuth = () => {
	const authData = useAppSelector(state => state.authData)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(set(!authData.isAuth))
	}, [authData])
}
