// Import your Tailwind input CSS here (use the correct filename & relative path)
import './index.css'   // ← not '/src/tailwindcss' and not via <script>
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)