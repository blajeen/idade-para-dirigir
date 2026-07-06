alert('Bem-vindo ao nosso site!');

let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual sua idade?"));

if (idade >= 18) {
    alert(`${nome}, você pode tirar habilitação!`);
} else {
    alert(`${nome}, você ainda não tem idade para dirigir!`);
}
