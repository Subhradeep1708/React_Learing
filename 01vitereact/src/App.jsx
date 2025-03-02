import Chai from "./chai"
function App() {

  const username = 'Subhradeep'
  return (
    <>
      <Chai />
      <h1>Chai aur Code{username}</h1> {/* Tags ke andar evaluated outcomes hi likh sakte hai.. if else type nahi likh sakte*/}
      <p>testing</p>
    </>
  )
}

export default App
