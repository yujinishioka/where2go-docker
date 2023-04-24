# Instala Alpine com Postgres
FROM postgres:alpine

# Define as variáveis de ambiente
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB postgressql

# Instala dependências e atualiza o sistema
RUN apk update && apk upgrade
RUN apk add --no-cache tzdata

# Adiciona um novo usuário e concede permissões limitadas
RUN echo "CREATE USER postgres WITH PASSWORD 'postgres';" > /docker-entrypoint-initdb.d/init-user.sql
RUN echo "GRANT CONNECT ON DATABASE postgressql TO postgres;" >> /docker-entrypoint-initdb.d/init-user.sql
RUN echo "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO postgres;" >> /docker-entrypoint-initdb.d/init-user.sql

# Cria um diretório padrão
RUN mkdir /app

# Copiar api para o Docker
COPY /api /app

# Expõe a porta padrão do PostgreSQL
EXPOSE 5432

# Inicializa o PostgreSQL
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]