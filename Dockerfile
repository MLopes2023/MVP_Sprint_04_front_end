# Use a imagem base do Node.js versão 16.14.2
FROM node:16.14.2

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install -g @angular/cli@14
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Construa o aplicativo Angular
RUN ng build

# Use uma imagem Nginx para servir os arquivos estáticos
FROM nginx:alpine
COPY --from=0 /app/dist/churn /usr/share/nginx/html

#FROM nginx:alpine
#COPY . /usr/share/nginx/html

#FROM nginx:alpine
#COPY --from=builder /app/dist/front-end/churn/usr/share/nginx/html

# Copie o arquivo de configuração do Nginx
#COPY nginx.conf /etc/nginx/nginx.conf


# Exponha a porta que a aplicação usará
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]