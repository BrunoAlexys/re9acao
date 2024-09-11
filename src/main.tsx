import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { Notification } from './components/notification/Notification'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Notification />
    </BrowserRouter>
  </StrictMode>,
)
