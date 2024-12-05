import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Spotify from './spotify.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Spotify/>
  </StrictMode>
)
