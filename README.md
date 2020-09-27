### Ykron - Projeto Carros

instalar docker: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) 


criar diretorio para rodar projeto: `mkdir diretorio`


entrar no diretorio: `cd diretorio`


clonar projeto para esse diretorio: `git clone https://github.com/tetigo/cars-api.git`


entrar no diretorio clonado: `cd cars-api`

rodar projeto: `node index.js`

Vai aparecer no terminal que o servidor está ouvindo na porta: 3333

Agora basta no browser digitar alguns exemplos de GET:
```
GET http://localhost:3333/veiculos/find?cod_fipe=123456-7

GET http://localhost:3333/veiculos/find?veiculo=Legend&marca=Agrale

GET http://localhost:3333/veiculos/find?vendido=true

GET http://localhost:3333/veiculos/5f6f8cfb58140753a3508321

GET http://localhost:3333/veiculos?limit=10

GET http://localhost:3333/veiculos
```

Para POSTS, PATCH, PUT e DELETE utilizar comamndo: `curl`

Exemplo de POST abaixo, para PUT ou PATCH basta substituir, para DELETE alem de substituir, passar o ID dentro do objeto {}:
```
curl -X POST -H 'Content-Type: application/json' -d '{"veiculo":"Q4","marca":"Audi"}' http://localhost:3333/veiculos

```

Ainda não tive tempo de fazer os testes utilizando um método tradicional como o `Mocha`. Estou entregando esse projeto no último dia disponível. Me desculpe por isso, é que tenho muitos processos em andamento e tentando dividir o tempo igualmente.
Entretando, instalei no `VSCode` uma ferramenta chamada `REST Client`, com a qual eu faço vários testes de requisição dentro do próprio ambiente VSCode. Com essa ferramenta, vc consegue criar todas as requisições, assim como o comando `curl`, mas sem precisar sair do VSCode. E também é mais simples. Basta instalar a ferramenta e depois acessar o arquivo `tests.http`. Em cima de cada linha de request vai aparecer uma pequena linha escrita `Send Request`. Basta clicar e ver o resultado da requisição no próprio ambiente de desenvolvimento.

