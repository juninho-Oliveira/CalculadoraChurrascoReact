import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Editar from "../EditarChurrasco/Editar"
import Formulario from "../CriarChurrasco/Criar"

const AppRouter = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/editar' element={<Editar/>} />
            <Route path='/criar' element={<Formulario/>} />
        </Routes>
    </BrowserRouter>
)

export {AppRouter}