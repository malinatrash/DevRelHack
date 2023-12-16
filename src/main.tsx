import Home from '@/pages/Home.tsx'
import { store } from '@/store/store.ts'
import '@styles/index.css'
import { Search } from 'lucide-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
		path: '/search',
		element: <Search />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
