# NodeJS com TYPESCRIPT, API RestFul e Banco de Dados SQLITE3 - Projeto 01

* Linguagem principal: Typescript
* Outras linguagens: Javascript
* Frameworks utilizadas: TYPESCRIPT, NODEMON, TS-NODE, TS-NODE-DEV, EXPRESS, EXPRESS-VALIDATOR, KNEX, SQLITE3, MULTER, BCRYPTJS, CORS, JSONWEBTOKEN, PATH e DOTENV
* Banco de Dados utilizado: SQLite 3
* Editor utilizado: Visual Studio Code
* Informações extras: Necessita conhecimentos médios NodeJS, Javascript e Typescript

----

## Descrição:

Pequeno projeto em NODEJS (API RestFul) com BD SQLite3 para simular um back-end de um sistema de cadastro de Recicladores de Lixo.

----

## Instalação Global dos pacotes para o NODEJS:

1. Instalar o NODEJS (última versão LTS) do site oficial (https://nodejs.org)
2. Instalar a linguagem TYPESCRIP, utilize o seguinte comando: 
   npm install -g typescript
3. Instalar a biblioteca NODEMON, utilize o seguinte comando: 
   npm install -g nodemon
4. Instalar a biblioteca TS-NODE, utilize o seguinte comando: 
   npm install -g ts-node

----

## Instalação direta dos pacotes para o NODEJS:

1. Caso você tenha instalado as bibliotecas globais, rode o seguinte comando na pasta do projeto:
   npm install

----

## Instalação na pasta do projeto (caso queira instalar as bibliotecas do projeto individualmente) dos pacotes para o NODEJS:

01. Instalar a biblioteca extra ao TYPESCRIPT no NODEJS: 
    npm install --save-dev @types/node
02. Instalar a biblioteca EXPRESS para NODEJS: 
    npm install express
03. Instalar a biblioteca extra ao EXPRESS no NODEJS: 
    npm install --save-dev @types/express
04. Instalar a biblioteca EXPRESS-VALIDATOR para NODEJS: 
    npm install express-validator
05. Instalar a biblioteca KNEX para NODEJS: 
    npm install knex
06. Instalar a biblioteca extra ao KNEX para NODEJS: 
    npm install --save-dev @types/knex
07. Instalar a biblioteca SQLITE3 para NODEJS: 
    npm install sqlite3
08. Instalar a biblioteca extra ao SQLITE3 para NODEJS: 
    npm install --save-dev @types/sqlite3
09. Instalar a biblioteca MULTER para NODEJS: 
    npm install multer
10. Instalar a biblioteca extra ao MULTER para NODEJS: 
    npm install --save-dev @types/multer
11. Instalar a biblioteca BCRYPTJS para NODEJS: 
    npm install bcryptjs
12. Instalar a biblioteca extra ao BCRYPTJS para NODEJS: 
    npm install --save-dev @types/bcryptjs
13. Instalar a biblioteca CORS para NODEJS: 
    npm install cors
14. Instalar a biblioteca extra ao CORS para NODEJS: 
    npm install --save-dev @types/cors
15. Instalar a biblioteca JSONWEBTOKEN para NODEJS: 
    npm install jsonwebtoken
16. Instalar a biblioteca extra ao JSONWEBTOKEN para NODEJS: 
    npm install --save-dev @types/jsonwebtoken
17. Instalar a biblioteca PATH no NODEJS: 
    npm install path
18. Instalar a biblioteca DOTENV para NODEJS: 
    npm install dotenv

----

## Banco de Dados:

1. Para criar o BD "database.sqlite", abra um terminal e digite: 
   npm run knex:migrate
2. Após o BD ser criado com as tabelas, rode o seguinte comando para preencher os dados: 
   npm run knex:seed

----

## Para rodar o projeto:

1. Crie o arquivo ".env" a partir do arquivo ".env-example" e preencha os dados solicitados
2. Abra um terminal ou prompt de comando na pasta do projeto e digite:
   npm run start-dev
3. Utilize algum software de teste de APIs como POSTMAN ou INSOMMNIA utilizando a URL:
   http://localhost:5001

----

## Sobre o Autor:

SANDRO YAQUB YUSUF - Analista & Programador Sênior FULL-STACK - Trabalha com desenvolvimento de softwares desde 1990, passando pelas linguagens COBOL, CLIPPER, VISUAL BASIC 6, ASP Clássico, ASP.NET Framework, ASP.NET Core, PHP (Laravel) e NodeJS. Possui conhecimentos em banco de dados como SQL-SERVER, ORACLE, MySQL, MariaDB, MongoDB e SQLite. Também possui conhecimentos em HTML5, CSS3, TYPESCRIPT e JAVASCRIPT. Para as frameworks de desenvolvimento de FRONT-END, possui conhecimentos em ANGULAR, VUEJS e REACT JS. Pratica o modelo CLEAN ARCHITECTURE usando os conhecimentos em DDD, SOLID e TDD.
