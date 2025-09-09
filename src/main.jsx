import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rooter from './router/Rooter.jsx'
import './styles/App.css'

import { UserProvider } from './context/UserProfilContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Rooter />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
