import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"


interface Inputs {
  data: Date
  homens: number
  mulheres: number
  criancas: number
}


/*validação feita com schema yup dos inputs */
const schema = yup
  .object({
    data: yup.date().min(new Date(), 'Data não pode ser menor do que a atual!').required('erro na data!'),
    homens: yup.number().positive('Digite um numero!').integer().required(),
    mulheres: yup.number().positive('Digite um numero!').integer().required(),
    criancas: yup.number().positive('Digite um numero!').integer().required(),
  })
  .required()


const Formulario = () => {

  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      //homens: 12
      //para já deixa o campo do input preenchido 
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: Inputs) => {
    console.log(data)
    reset();
  }

  return (
    <>
      <section className="flex  items-center w-full flex-col ">

        <header className=" flex  w-full bg-slate-600 h-24 justify-center gap-5 items-center">
          <button className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" >Home</button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96 h-96 justify-center border-2 border-gray-400 gap-2 p-3 mt-40 rounded-lg">

          <label htmlFor="">Data </label>
          <input type="date" {...register('data')} className="border-gray-400 border-2 rounded-md" />

          <label htmlFor="">Quantidade de Homens </label>
          <input type="number" {...register("homens")} className="border-gray-400 border-2 rounded-md" />

          <label htmlFor="">Quantidade de Mulheres </label>
          <input type="number" {...register("mulheres")} className="border-gray-400 border-2 rounded-md" />

          <label htmlFor="">Quantidade de Crianças </label>
          <input type="number" {...register("criancas")} className="border-gray-400 border-2 rounded-md" />

          <div className="flex w-full h-12 items-center justify-center">
            <button type="submit" className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700">Enviar</button>
            {/*<button type="button" onClick={() => console.log(errors)} >erro</button>*/}
          </div>
        </form>
      </section>
    </>
  )
}

export default Formulario;