
function App() {
  return (
    <div className="font-bold p-18 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Exemplo de Espaçamentos com Tailwind CSS</h1>
      <div className="bg-blue-500 text-white p-4 mb-4 rounded">p-4 (padding)</div>
      <div className="bg-green-500 text-white px-8 py-2 mb-4 rounded">px-8 py-2 (padding horizontal/vertical)</div>
      <div className="bg-yellow-400 text-black m-4 p-2 rounded">m-4 (margin)</div>
      <div className="bg-purple-500 text-white mt-8 p-2 rounded">mt-8 (margin-top)</div>
      <div className="bg-gray-700 text-white mb-8 p-2 rounded">mb-8 (margin-bottom)</div>
      <div className="flex gap-4 mt-8">
        <div className="bg-pink-500 p-4 rounded">gap-4</div>
        <div className="bg-pink-400 p-4 rounded">gap-4</div>
      </div>
    </div>
  )
}

export default App
