import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../components/style css/App.css'
import '../../style bootstrap/css/bootstrap.min.css'
import '../../style bootstrap/js/bootstrap.bundle.min.js'
import '../../icons/css/all.min.css'
import { BrowserRouter } from 'react-router-dom'
import Rooter from '../rooter/Rooter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rooter />
    </BrowserRouter>
  </StrictMode>
)
