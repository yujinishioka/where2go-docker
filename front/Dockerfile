# Instala o Ubuntu
FROM ubuntu

# Instala dependências e atualiza o sistema
RUN apt-get -y update 
RUN apt-get install npm -y 

# Cria um diretório padrão
RUN mkdir /app

# Expõe a porta 3000
EXPOSE 3000

# Copiar api para o diretório padrão
COPY /where2go /app