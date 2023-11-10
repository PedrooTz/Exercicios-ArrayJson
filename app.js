// OBJETIVO:                                                   *
// Criar uma API para responder dados de estados e cidades     *
// Data: 10/11/2023                                            * 
// Autor: Pedro Pedraga                                        *
// Versão 1.0                                                  *
// *************************************************************

//  Instalações: 
//  express, auxílio na criação de API
//  cors, manipular recursos de acessos e permissões (Header) 
//  body-parser, auxílio na chegada de dados na API (Body)     
// *************************************************************

// Import das bibliotecas instaladas
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Cria um objeto app tendo como referência a biblioteca do express
const app = express();

// request - Receber dados
// response - Devolve dados


// Função para configurar as permissões do cors
app.use((request, response, next)=>{

    // Configura quemm pode´ra fazer requisições na API (* - Libera todos | IP - Restringe acesso)
    response.header('Acess-Control-Allow-Origin', '*');

    // Configura os métodos que poderão ser utilizados na API | (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods', 'GET');

    app.use(cors());

    next();
})

// EndPoints: Listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleLista = require('./modulo/main');
    let estados = controleLista.getListaDeEstados();
    response.json(estados);
    response.status(200);
});

// Executa a API e faz aguardar por requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições');
})

