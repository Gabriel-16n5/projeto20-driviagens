# projeto20-driviagens.
criação de um projeto back-end usando nodejs e pg do zero step by step.
criar o projeto direto pelo github.
já marcar a criação do readme e add o gitignore template com base na tecnologia que vai usar, nesse caso nodejs.
npm init -y.
criar a pasta src na raiz.
dentro dela criar o app.js
criar todas as pastas necessárias dentro da src, na maioria das vezes serão as seguintes:
Controllers.
database.
middlewares.
repositories.
routers.
schemas.
services.
errors.
utils.
entre outras...

agora instalar as dependências necessárias, isso pode variar, mas segue algumas:
npm i -D nodemon
npm i joi bcrypt cors dayjs dotenv express http-status nanoid pg uuid