import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-8 space-y-4">
        <h1 className="background-red-500 text-2xl font-bold mb-4">Exemplo de Cores com Tailwind CSS</h1>
        <div className="flex flex-wrap gap-4">
          <div className="bg-red-500 text-white px-4 py-2 rounded">bg-red-500</div>
          <div className="bg-green-500 text-white px-4 py-2 rounded">bg-green-500</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">bg-blue-500</div>
          <div className="bg-yellow-400 text-black px-4 py-2 rounded">bg-yellow-400</div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded">bg-purple-500</div>
          <div className="bg-pink-500 text-white px-4 py-2 rounded">bg-pink-500</div>
          <div className="bg-gray-700 text-white px-4 py-2 rounded">bg-gray-700</div>
        </div>
        <div className="mt-6">
          <span className="text-red-600 font-semibold">text-red-600</span> |
          <span className="text-green-600 font-semibold"> text-green-600</span> |
          <span className="text-blue-600 font-semibold"> text-blue-600</span>
        </div>
      </div>
    </>
  )
}

export default App
