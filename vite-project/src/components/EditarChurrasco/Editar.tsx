import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup.object({
  data: yup.date().min(new Date(), 'Data não pode ser menor do que a atual!').required('Erro na data!'),
  homens: yup.number().positive('Digite um número!').integer().required(),
  mulheres: yup.number().positive('Digite um número!').integer().required(),
  criancas: yup.number().positive('Digite um número!').integer().required(),
}).required();

const Editar = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/ListaChurrascos/${id}`)
        .then(response => {
          const churrasco = response.data;
          
          const partesDaData = churrasco.dataChurrasco.split('/');
          const dataFormatada = `${partesDaData[2]}-${partesDaData[1].padStart(2, '0')}-${partesDaData[0].padStart(2, '0')}`;
  
          reset({
            data: dataFormatada, 
            homens: churrasco.quantidadeHomens,
            mulheres: churrasco.quantidadeMulheres,
            criancas: churrasco.quantidadeCriancas,
          });
        })
        .catch(error => console.error("Erro ao buscar churrasco para edição", error));
    }
  }, [id, reset]);

  const onSubmit = async (data) => {

    const dia = data.data;
    const dataFormatada = new Date(dia).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const soma = data.homens + data.mulheres + data.criancas;
    const quantidadeCarne = (data.homens * 0.4) + (data.mulheres * 0.32) + (data.criancas * 0.20);
    const quantidadePaoAlho = (data.homens + data.mulheres) * 2 + data.criancas;
    const quantidadeCarvao = soma;
    const quantidadeRefri = Math.ceil(soma / 5);
    const quantidadeCerveja = (data.homens + data.mulheres) * 3;

    if (id) {
      try {
        await axios.put(`http://localhost:3000/ListaChurrascos/${id}`, {
          dataChurrasco: dataFormatada,
          quantidadeHomens: data.homens,
          quantidadeMulheres: data.mulheres,
          quantidadeCriancas: data.criancas,
          quantidadePessoas: soma,
          quantidadeCarne,
          quantidadePaoAlho,
          quantidadeCarvao,
          quantidadeRefri,
          quantidadeCerveja,
        });
        console.log('Churrasco atualizado com sucesso.');
        navigate('/');
      } catch (error) {
        console.error('Erro ao atualizar o churrasco:', error);
      }
    } else {
      console.error("ID não fornecido para a edição");
    }
  };

  return (
    <>
      <section className="flex items-center w-full flex-col">
        <header className="flex w-full bg-slate-600 h-24 justify-center gap-5 items-center">
          <button className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700" onClick={() => navigate('/')}>Home</button>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96 h-96 justify-center border-2 border-gray-400 gap-2 p-3 mt-40 rounded-lg">
          <label>Data</label>
          <input type="date" {...register('data')} className="border-gray-400 border-2 rounded-md" />
          <label>Quantidade de Homens</label>
          <input type="number" {...register('homens')} className="border-gray-400 border-2 rounded-md" />
          <label>Quantidade de Mulheres</label>
          <input type="number" {...register('mulheres')} className="border-gray-400 border-2 rounded-md" />
          <label>Quantidade de Crianças</label>
          <input type="number" {...register('criancas')} className="border-gray-400 border-2 rounded-md" />
          <div className="flex w-full h-12 items-center justify-center">
            <button type="submit" className="bg-indigo-500 w-20 h-10 rounded-lg text-white text-lg font-semibold hover:bg-indigo-700">Editar</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Editar;
