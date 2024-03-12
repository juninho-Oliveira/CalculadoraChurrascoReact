import { useForm } from "react-hook-form"


interface Inputs  {
  data: string
  idade: string
  nome: string
}


const Formulario = () => {

  const { register } = useForm<Inputs>()

  return (
    <form >
  
      <input type="text" {...register('nome')}/>

      <input type="text" {...register("idade")}/>


      <button type="submit" >Enviar</button>
    </form>
  )
}

export default Formulario;