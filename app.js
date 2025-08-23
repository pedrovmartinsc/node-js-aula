console.log("Hello!")

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

console.log( json)