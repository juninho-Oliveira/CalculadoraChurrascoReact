import './home.css'
import data from '../../../../db.json'
import Header from '../Header/Header'
import DeleteButton from '../ExcluirChurrasco/Excluir'
//import EditButton from '../EditarChurrasco/Editar'
import { useState } from 'react'

const Home = () => {

    const [listaChurrascos, setListaChurrascos] = useState(data.ListaChurrascos)


    const handleItemDeleted = (id: any) => {
        setListaChurrascos(listaChurrascos.filter(item => item.id !== id));
    };

    //const handleItemSaved = (updatedItem: any) => {
       // setListaChurrascos(listaChurrascos.map(item => item.id === updatedItem.id ? updatedItem : item));
    //};

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
                                    {/*<EditButton item={item} onSave={handleItemSaved} />*/}
                                    <DeleteButton id={item.id} onDelete={handleItemDeleted} />
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