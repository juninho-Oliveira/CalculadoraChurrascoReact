import data from '../DbJson/db.json'

const Home = () => {

    console.log(data)

    return (
        <div>
            <header className=" flex  w-full bg-slate-600 h-24 justify-center gap-5 items-center">
                <button className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" >Home</button>
                <button className="bg-indigo-500 w-36 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" >Criar Churrasco</button>
            </header>

            <main className=' flex  w-full  h-24 justify-center gap-5 items-center'>
                <table>
                    <tr className=' flex gap-2'>
                        <th>Data</th>
                        <th>Quantidade de Pessoas</th>
                        <th>Carne (Kg)</th>
                        <th>Pão de Alho</th>
                        <th>Carvão (Kg)</th>
                        <th>Refri (L)</th>
                        <th>Cerveja (L)</th>
                        <th>Ação</th>
                    </tr>
                    <tbody>
                        
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Home;