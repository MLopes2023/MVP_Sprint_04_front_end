# APP Bank Customer Churn Prediction

- O aplicativo efetua o controle de registros de predições de rotatividade de clientes, cujo o objetivo é prever a rotatividade de clientes no banco durante algum período, aplicando o melhor modelo de machine learnig, com base nos dados dos correntidas do ABC Multinational Bank fornecido, sendo também possível adicionar, listar e remover predições já registradas.


### Tecnologias utilizadas

- Angular 14
- Node js 16.14.2
- Bootstrap 5.3.3
- Sweetalert2
- ngx-mask@14.3.3
    https://www.npmjs.com/package/ngx-mask
    https://github.com/JsDaddy/ngx-mask/blob/develop/USAGE.md

### Executar através do Docker

- É imprescindível ter o Docker instalado e iniciado em seu computador.

- Após clonar o repositório, navegue para o diretório em que se encontra o arquivo Dockerfile, executar como **administrador** os comandos abaixo, para construção da imagem Docker: 

  - Construir imagem  Docker:
    
    docker build -t front-end-churn .

  - Executar o container Docker, conectado à mesma rede das api's do back-end:
  
    docker  run  -d  --name  front-end-churn --network  minha_rede  -p  8080:80  front-end-churn

- A Aplicação está disponível e basta abrir o http://localhost:8080/#/ no navegador.

- Caso haja a necessidade de **parar um conatiner**, basta executar os comandos: 

  Efetuar o comando **docker container ls --all** (vai retornar containers existentes para localização do ID do container para ser utilizado no comando abaixo):

  Efetuar o comando **docker stop CONTAINER_ID**, sendo CONTAINER_ID recuperado no comanddo anterior.

### Executar no ambiente de desenvolvimento

- Download do nodeJS 16.14.2 versão do curso e instalar.

- Abrir o terminal na pasta da aplicação front-end\churn.

  - executar o comando para instalação de todas a dependências já mapeadas no projeto:
    npm install

- Executar o projeto 
  
  - Comando para rodar o projeto front-end
    ng s ou ng serve
    A aplicação poderá ser acessado no browser no link http://localhost:4200/
