
import './App.css'
const VITE_MY_VAR = import.meta.env.VITE_MY_VAR
function App() {

  return (
    <>
    <h1>{VITE_MY_VAR}</h1>
    </>
  )
}

export default App
