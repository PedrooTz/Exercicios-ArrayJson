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

// EndPoint: Retorna os dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
    // Recebe uma variável encaminhada por parâmetro na URL da requisição
    let siglaEstado = request.params.uf;
    // Import do arquivo de funções
    let controleDadosEstado = require('./modulo/main');
    let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado);

    if(dadosEstado){
        response.json(dadosEstado);
        response.status(200);
    }else{
        response.status(404);
        response.json('{Erro: "Não foi possivel encontrar o item}');

    }
       
});

// EndPoint: Retorna os dados da capital filtrando pela sigla
app.get('/capital/estado', cors(), async function(request, response, next){
    
    // Recebe parametros via query, são variaveis encaminhadas na url da requisição (?uf=sp)
    let siglaEstado = request.query.uf

    let controleDadosCapital = require('./modulo/main')
    let dadosDaCapital = controleDadosCapital.getCapitalEstado(siglaEstado)

    if(dadosDaCapital){
        response.json(dadosDaCapital);
        response.status(200);
    } else {
        response.status(404);
        response.json({erro: "Não foi possivel encontrar um item"});
    }
    // let cidade = request.query.cidade;
    // let pais = request.query.pais
    // console.log(siglaEstado);
    // console.log(cidade);
    // console.log(pais);
});

    // EndPoint: Retorna os estados de uma regiao filtrando pela região
    app.get('/estados/regiao', cors(), async function(request, response, next){

        let regiaoEstado = request.query.regiaoEstado
        let estadosRegiao = require('./modulo/main')
        let dadosRegiao = estadosRegiao.getEstadosRegiao(regiaoEstado)

        if(dadosRegiao){
            response.json(dadosRegiao);
            response.status(200);
        } else {
            response.status(404);
            response.json({erro: "Não foi possivel encontrar um item"});
        }
    })


// Executa a API e faz aguardar por requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições');
})

