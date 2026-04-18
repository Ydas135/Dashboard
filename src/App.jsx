import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { UserProvider } from './context/UserContext'

export function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

