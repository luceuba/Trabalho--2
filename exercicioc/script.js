alert("Bem-vindo!"); 
let nota1= Number(prompt("Indique a nota do 1ºbimeste:"));
let nota2= Number(prompt("Indique a nota do 2ºbimeste:"));
let nota3= Number(prompt("Indique a nota do 3ºbimeste:"));
let nota4= Number(prompt("Indique a nota do 4ºbimeste:"));
let total = (nota1 + nota2 + nota3 +nota4)/4;
const media = 5


if(total>= media){
alert(`Aprovado${total}`);
}else{
alert(`Reprovado${total}`)
}