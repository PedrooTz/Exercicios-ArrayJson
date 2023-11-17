const estadosCidades =require('./estados_cidades')

const getListaDeEstados = function(){

    let ArraySigla = []
    let JsonSigla = {}
    let cont = 0;
    while  (cont < 27 ){

    ArraySigla.push(estadosCidades.estadosCidades.estados[cont].sigla)
    cont++
    }
    JsonSigla.quantidade = ArraySigla.length
    JsonSigla.uf = ArraySigla
    return JsonSigla


    };

    const getDadosEstado = function(){
        
        let DadosJson = {}
        let FiltrarEstados = 'RJ'
        let cont = 0;
        let status = false;
        while  (true){

            if(FiltrarEstados==estadosCidades.estadosCidades.estados[cont].sigla){
                DadosJson.uf=estadosCidades.estadosCidades.estados[cont].sigla
                DadosJson.descricao=estadosCidades.estadosCidades.estados[cont].nome
                DadosJson.capital=estadosCidades.estadosCidades.estados[cont].capital
                DadosJson.regiao=estadosCidades.estadosCidades.estados[cont].regiao
                status = true
                break
            }

        
        cont++
    
        }
        if(status)
            return DadosJson
        else
            return false;

    };

    const getCapitalEstado = (sigla = 'SP') => {

        let status = false;
        let JsonDados = {}
        let estadoscidades = estadosCidades.estadosCidades.estados;

        estadoscidades.forEach(function (estados) {

            if(estados.sigla.includes(sigla)){
                JsonDados.sigla = estados.sigla
                JsonDados.descricao = estados.nome
                JsonDados.capital = estados.capital
                status = true;
            }
            
        });

        if(status)
        return JsonDados
    else
        return false;
   

    };

    const getEstadosRegiao = function(){

        let status = false;
        let RegiaoARRAY=[]
        let filtrarRegiao='SUL'
        let counter=0
        while(counter < 27){
            
            if(filtrarRegiao.toUpperCase()==estadosCidades.estadosCidades.estados[counter].regiao.toUpperCase()){
            RegiaoJSON={}
            RegiaoJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
            RegiaoJSON.nome=estadosCidades.estadosCidades.estados[counter].nome
            RegiaoARRAY.push(RegiaoJSON)
            status = true
            }
           counter++
         }
        
         if(status)
         return RegiaoARRAY
     else
         return false;
    }
    
    //     if(status)
    //     return ARRAYestados
    // else
    //     return false;
   
        

    

    // console.log(getEstadosRegiao('Sudeste'))

    // console.log(getCapitalEstado())

    // console.log(getDadosEstado())

    // console.log(getListaDeEstados())
    module.exports = {
        getListaDeEstados,
        getDadosEstado,
        getCapitalEstado,
        getEstadosRegiao
    }


