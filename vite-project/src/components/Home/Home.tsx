import './home.css'
import data from '../../../../db.json'
import Header from '../Header/Header'

const Home = () => {

    return (
        <div>

            <Header />

            <main className='flex  w-full justify-center items-center mt-6 '>
                <table className='w-10/12 gap-2 text-center flex-col justify-center items-center'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Quantidade de Pessoas</th>
                            <th>Carne (Kg)</th>
                            <th>Pão de Alho</th>
                            <th>Carvão (Kg)</th>
                            <th>Refri (L)</th>
                            <th>Cerveja (L)</th>
                            <th>Ação</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.ListaChurrascos.map(item => (
                            <tr key={item.id} className=' border-2 mb-5'>
                                <td>{item.dataChurrasco}</td>
                                <td>{item.quantidadePessoas}</td>
                                <td>{item.quantidadeCarne.toFixed(2)}</td>
                                <td>{item.quantidadePaoAlho}</td>
                                <td>{item.quantidadeCarvao}</td>
                                <td>{item.quantidadeRefri}</td>
                                <td>{item.quantidadeCerveja}</td>
                                <td className='flex gap-2 items-center justify-center p-2'>
                                    <button className="bg-indigo-500 w-12 h-8 rounded-lg text-white text-sm font-semibold hover:bg-indigo-700">Editar</button>
                                    <button className="bg-indigo-500 w-12 h-8 rounded-lg text-white text-sm font-semibold hover:bg-indigo-700">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </main>
        </div>
    )
}

export default Home;