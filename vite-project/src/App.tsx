import Home from './components/Home/Home'
import Formulario from './components/CriarChurrasco/Criar'
import './App.css'
import { useEffect } from 'react'
import { getApi } from './services/axios.service'

function App() {



    return (
      <div className='flex justify-center items-center w-full '>
      {/*<Home/>*/}
      <Formulario />
      </div>
    )

}

export default App
