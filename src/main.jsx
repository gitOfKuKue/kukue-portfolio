import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './Pages/MainPage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
