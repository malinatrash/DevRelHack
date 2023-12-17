import Chat from '@/pages/Chat'
import Home from '@/pages/Home.tsx'
import { store } from '@/store/store.ts'
import '@styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Messages from './pages/Messages'
import News from './pages/News'
import Profile from './pages/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/news',
		element: <News />,
	},
	{
		path: '/chat',
		element: <Chat />,
	},
	{
		path: '/messages',
		element: <Messages />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
