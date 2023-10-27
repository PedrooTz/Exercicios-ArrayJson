const estadosCidades =require('./modulo/estados_cidades')

// const getListaDeEstados = function(){

//     let ArraySigla = []
//     let JsonSigla = {}
//     let cont = 0;
//     while  (cont < 27 ){

//     ArraySigla.push(estadosCidades.estadosCidades.estados[cont].sigla)
//     cont++
//     }
//     JsonSigla.quantidade = ArraySigla.length
//     JsonSigla.uf = ArraySigla
//     return JsonSigla


// }

    // const getDadosEstado = function(){
        
    //     let DadosJson = {}
    //     let FiltrarEstados = 'SP'
    //     let cont = 0;
    //     while  (true){

    //         if(FiltrarEstados==estadosCidades.estadosCidades.estados[cont].sigla){
    //             DadosJson.uf=estadosCidades.estadosCidades.estados[cont].sigla
    //             DadosJson.descricao=estadosCidades.estadosCidades.estados[cont].nome
    //             DadosJson.capital=estadosCidades.estadosCidades.estados[cont].capital
    //             DadosJson.regiao=estadosCidades.estadosCidades.estados[cont].regiao
    //             break
    //         }

        
    //     cont++
    
    //     }

       
    //     return DadosJson

    // }

    // const getCapitalEstado = (sigla = 'AC') => {

    //     let JsonDados = {}
    //     let estadoscidades = estadosCidades.estadosCidades.estados;

    //     estadoscidades.forEach(function (estados) {

    //         if(estados.sigla.includes(sigla)){
    //             JsonDados.sigla = estados.sigla
    //             JsonDados.descricao = estados.nome
    //             JsonDados.capital = estados.capital
    //         }
            
    //     });

    //     return JsonDados

    // }

    const getCapitalEstado = (regiao = 'SUL') => {

        let JsonDados = {}
        let estadoscidades = estadosCidades.estadosCidades.estados;

        estadoscidades.forEach(function (estados) {

            if(estados.regiao.includes(regiao)){
                JsonDados.regiao = estados.regiao
                JsonDados.descricao = estados.nome
                JsonDados.capital = estados.capital
            }
            
        });

        return JsonDados

    }

    console.log(getCapitalEstado())


    // console.log(getCapitalEstado())

    // console.log(getDadosEstado())


// console.log(getListaDeEstados())


