import axios from 'axios';

function DeleteButton({ id, onDelete }: any) {
  const handleDelete = () => {

    axios.delete(`http://localhost:3000/ListaChurrascos/${id}`)
      .then(response => {
        onDelete(id);
        alert('Item deletado com sucesso!');
      })
      .catch(error => console.error('Erro ao deletar item:', error));
  };

  return (
    <button onClick={handleDelete} className="bg-indigo-500 w-12 h-8 rounded-lg text-white text-sm font-semibold hover:bg-indigo-700">Excluir</button>
  );
}

export default DeleteButton;
