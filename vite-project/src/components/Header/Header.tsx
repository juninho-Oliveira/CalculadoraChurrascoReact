

const Header = () => {
    return (
        <header className=" flex  w-full bg-slate-600 h-24 justify-center gap-5 items-center">
            <button className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" >Home</button>
            <button className="bg-indigo-500 w-36 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" >Criar Churrasco</button>
        </header>
    )
}

export default Header