# CalculadoraChurrascoReact

### Página Inicial

### Navbar:
- Com um botão para criar um novo churrasco que, ao ser clicado, redireciona para a tela de criação de churrasco.

Logo abaixo, haverá uma tabela que exibirá os churrascos cadastrados. Se não houver churrascos cadastrados, será exibida uma mensagem informando que não há nenhum cadastrado.

### Campos da Tabela:
- (Data, Quantidade de Pessoas, Carne, Pão de Alho, Carvão, Refrigerante, Cerveja e uma coluna de Ação)
- Na coluna de Ação, haverá dois botões:
- Um botão para Editar (ao ser clicado, redireciona para a tela de edição)
- Um botão para Excluir (ao ser clicado, remove a linha correspondente)

### Tela de Criação de Churrasco
- No navbar, o botão agora levará de volta à página inicial.
- Abaixo do navbar, haverá um formulário com os seguintes campos:
- Data (Formato da Data: dd/MM/yyyy, não pode ser anterior à data atual, não pode ser nulo)
- Quantidade de Homens (Somente números, não pode ser nulo, mas pode ser zero)
- Quantidade de Mulheres (Somente números, não pode ser nulo, mas pode ser zero)
- Quantidade de Crianças (Somente números, não pode ser nulo, mas pode ser zero)
- Botão de Criar (Desabilitado caso o formulário seja inválido)
- Utilizar a biblioteca de formulários react-form-hooks
- Ao clicar no botão, realizar os cálculos:
Carne
0,4 KG por homem;
0,32 KG por mulher;
0,20 KG por criança;
Pão de Alho
2 por adulto;
1 por criança;
Carvão
1 KG por pessoa;
Refrigerante
1 garrafa de 2L para cada 5 pessoas;
Cerveja
3 garrafas de 600ml por pessoa (adultos)
- Após os cálculos, enviar os dados para a tela e retornar à página inicial.

### Tela de Edição de Churrasco
- Semelhante à tela de criação de churrasco, com a diferença de que esta tela receberá o ID do churrasco e buscará os dados correspondentes.
- Ao salvar, os dados serão atualizados e o usuário será redirecionado à página inicial.
- Também haverá um navbar com um botão para voltar.

Utilizar Tailwind UI para estilos.
Utilizar JSON Server para simular o backend.
Utilizar Axios para fazer chamadas HTTP.
Utilizar React com Vite para o projeto.
Utilizar React Router Dom.
Utilizar React Hook Forms
Utilizar Context Api ou Zustand (Talvez)