import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './screens/home/Home.tsx'
import Agendamento from './screens/agendamento/Home.tsx'
import Consulta from './screens/consulta/Home.tsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "agendamento",
      element: <Agendamento />
    },
    {
      path: "consulta",
      element: <Consulta />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
