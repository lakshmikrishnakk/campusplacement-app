import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './assets/components/AddRegistration'
import SearchRegistration from './assets/components/SearchRegistration'
import DeleteRegistration from './assets/components/DeleteRegistration'
import ViewAllRegistration from './assets/components/ViewAllRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRegistration/>
      <SearchRegistration/>
      <DeleteRegistration/>
      <ViewAllRegistration/>
    </>
  )
}

export default App
