/*console.log("Hello!")

// JSON

const pessoa = {
    "nome": "Alex",
    "idade": "29",
    saudar: function(){
        console.log(`Olá ${this.nome}!`)
    }
};
// transformar um objeto em json
const json = JSON.stringify(pessoa) // objeto
// transformar um json em objeto
const novaPessoa = JSON.parse(json)

console.log(novaPessoa)

console.log( json)*/

//CommonJS
//const funcao = require("./script")

//funcao(2, 3);

//import {somar} from './index.js';

//somar(2, 5);

const fs = require('fs');
//criar arquivo
//fs.writeFile('C:/Users/User/OneDrive/Documentos/Coisa-de-programacao/outroArquivo.txt', 'Oi, de novo', 'utf-8', 
  //  (erro) => {
  //  if(erro){
///        console.log(`Erro ao ler arquino: ${erro}`);
//        return;
//    };

//    console.log(`arquivo criado com sucesso`);
//});

function criarCoisa(){

fs.mkdir('C:/Users/User/OneDrive/Documentos/oiAqui', {recursive: true}, (erro) => {
    if(erro){
        console.log(`Erro ao ler arquino: ${erro}`);
        return;
    };

    console.log(`Diretório criado com sucesso`);



    fs.writeFile('C:/Users/User/OneDrive/Documentos/oiAqui/novoArquivo.txt', 'Oi, mundo', 'utf-8', (erro) => {
        if(erro){
        console.log(`Erro ao ler diretório: ${erro}`);
        return;
    };
        console.log(`Arquivo criado com sucesso`);
        
        

        fs.readFile('C:/Users/User/OneDrive/Documentos/oiAqui/novoArquivo.txt', 'utf-8', (erro, dado) => {
        if(erro){
        console.log(`Erro ao ler arquino: ${erro}`);
        return;
        };
        console.log(`O que está escrito: ${dado}`);
        
    });
    });
        });




    }

    criarCoisa();
