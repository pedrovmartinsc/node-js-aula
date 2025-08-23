
#Aprendedo sobre Node.JS

REPL

JSON

O Node.JS não possui objetos 

~~~ javascript
// JSON

const pessoa = {
    "nome": "Alex",
    "idade": "29",
    saudar: function(){
        console.log(`Olá ${this.nome}!`)
    }
};

const json = JSON // objeto

console.log(pessoa.saudar())
~~~ 