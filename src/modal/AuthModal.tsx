import StepPoint from '@/components/StepPoint'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	useGetSessionMutation,
	useLazyGetUserDataQuery,
} from '@/store/api/session.api'
import { hide } from '@/store/slices/authModalSlice'
import { setUser } from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalContext } from './modal-context'

const AuthDialog = () => {
	const isShown = useSelector((state: RootState) => state.authModal.isShown)
	const dispatch = useDispatch()
	const { show, setShow } = useContext(ModalContext)
	const [token, settoken] = useState<string>('')
	const [getSession, { data }] = useGetSessionMutation()
	const { '0': trigger, '1': userData } = useLazyGetUserDataQuery()

	function setSessionCookie(sessionId: string) {
		document.cookie = `session=${sessionId}; path=/;`
	}

	const action = () => {
		if (isShown) {
			dispatch(hide())
		}
	}

	const auth = async () => {
		await getSession({ token: token })
	}

	const fetchData = async (session: string) => {
		await trigger(session)
		dispatch(setUser(userData))
	}

	useEffect(() => {
		if (data?.session) {
			const session = data?.session
			setSessionCookie(session)
			fetchData(session)
		}
	}, [data])

	useEffect(() => {
		console.log(userData.currentData)
	}, [userData])

	const [isFirstRegister, setisFirstRegister] = useState(true)

	useEffect(() => {
		setShow(isShown)
	}, [isShown])
	return (
		<Dialog open={show} onOpenChange={action}>
			<DialogContent className='overflow-hidden mobile:max-w-[95%] mobile:self-center flex items-center justify-center flex-wrap w-[390px]'>
				<DialogHeader onClick={() => setShow(false)}></DialogHeader>
				<Tabs defaultValue='login' className='w-[300px]'>
					<TabsList className='grid grid-cols-2 mb-4'>
						<TabsTrigger value='login'>Вход</TabsTrigger>
						<TabsTrigger value='register'>Регистрация</TabsTrigger>
					</TabsList>
					<TabsContent value='login'>
						<div className='flex flex-col gap-4'>
							{isFirstRegister ? (
								<div className='flex flex-col gap-4'>
									<Input placeholder='@telegram-username' value={''} />
									<Button>Войти</Button>
								</div>
							) : (
								<div className='flex flex-col gap-4'>
									<Input
										value={token}
										onChange={e => settoken(e.target.value)}
										type='text'
										placeholder='abcdef'
									/>
									<Button onClick={auth}>Отправить</Button>
								</div>
							)}
						</div>
					</TabsContent>
					<TabsContent value='register'>
						{isFirstRegister ? (
							<div className='flex flex-col gap-4'>
								<span className='text-center p-4'>
									Мы используем авторизацию через телеграм, пожалуйста,
									подключите нашего бота и возвращайтесь
								</span>
								<Button onClick={() => setisFirstRegister(false)}>
									<a target='_blank' href='https://t.me/devrel_bot'>
										Подключить
									</a>
								</Button>
							</div>
						) : (
							<div className='flex flex-col gap-4'>
								<Input
									value={token}
									onChange={e => settoken(e.target.value)}
									type='text'
									placeholder='abcdef'
								/>
								<Button onClick={auth}>Отправить</Button>
							</div>
						)}
					</TabsContent>
				</Tabs>
				<div className='flex gap-4 w-full justify-center pl-4'>
					<StepPoint
						isChoosen={isFirstRegister}
						onClick={() => setisFirstRegister(!isFirstRegister)}
					/>
					<StepPoint
						isChoosen={!isFirstRegister}
						onClick={() => setisFirstRegister(!isFirstRegister)}
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default AuthDialog
