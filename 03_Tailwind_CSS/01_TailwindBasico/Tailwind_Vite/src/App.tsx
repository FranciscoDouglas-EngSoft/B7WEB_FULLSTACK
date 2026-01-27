import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tailwindcss from '@tailwindcss/vite'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-500 p-4 text-white mb-4 justify-center flex'>
      </div>
      <tailwindcss/>
    </>
  )
}

export default App
