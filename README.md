para rodar o projeto: 


1. abra o MySQL Workbench com acesso de usuário **root** e senha **12345678**. Crie um schema com o nome de **pd-challenge**, 
2. abra uma janela de terminal e execute as seguintes ações:
    - _cd server_
    - _npm i_
    - _npm start_
3.  volte ao MySQL Workbench,  na aba de _Tables_,  importe o arquivo records.json e depois o musics.json para popular as respectivas tabelas 
4. abra uma outra janela de terminal e execute as seguintes ações:
    - _cd client_
    - _npm i_
    - _npm start_
5. Habilite o CORS no navegador Chrome