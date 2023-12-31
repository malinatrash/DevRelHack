import Home from '@/pages/Home.tsx'
import { store } from '@/store/store.ts'
import '@styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chat from "@/pages/Chat";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/chat',
		element: <Chat />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
