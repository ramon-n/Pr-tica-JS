console.log("Esse script está no cabeçalho do HTML");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca
var teste = 1;
document.write("O valor da variável teste é " + teste + "<hr>");
teste = 'joao';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global
nome = 'joao';// definir nome
console.log(nome)// imprimir nome

// Formas de declaração de variáveis
var   v1 = 5.25;
// variavel do tipo real
let   v2 = null; 
//  let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada
const v3 = 'teste'
// constante onde vai puxar uma um tipo string 

console.log(typeof(v1));
// vai retornar a variavel v1 que e do tipo real
console.log(typeof(v2));
// vai retornar um let com valor do tipo null
console.log(typeof(v3));
// vai retornar uma constante do tipo string 
console.log(typeof NaN); 
// tipo number
console.log(typeof +Infinity); 
// tipo number
console.log(typeof null); 
// tipo number
console.log(number == 1);
// vai retornar igualdade 
console.log(number === 1);
// vai verificar se um e identico ao outro

console.log('ele disse "vtnc"');
// vai retornar no log um texto

// adicionar uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
// vai retornar uma lista 
var listaUl = document.createElement('ul');
// vai retornar uma lista visual 
var body = document.getElementsByTagName('body');

console.log(listaUl);
// vai imprimir uma lista 
console.log(body);
// vai imprimir no log

body[0].appendChild(listaUl);
// inserir um nó no DOM

document.write("Lista não ordenada criada por JavaScript");

for(var  i=0;i<lista.length;i++) { // ira percorrer a lista 
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);


    var obj = {

        nome:
        sobrenome:
        profoissao:
        salario:
        pessoaJuridica:
    }




}


