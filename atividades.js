let idade = 16;

if (idade < 13) {
    console.log("criança");
}

if (idade >= 13 && idade < 23) {
    console.log("adolecente");
}

if (idade >= 23 && idade <= 55) {
    console.log("adulto");
}

if (idade > 55) {
    console.log("idoso");
}

if (idade >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade")
}







let nota = 8;

if (nota < 5) {
    console.log("Reprovado");
}

if (nota >= 5 && nota <= 7) {
    console.log("Recuperação")
}

if (nota > 7 && nota <= 10) {
    console.log("Aprovado")
}




let a = 6;
let b = 3;
let op = '+'

if (op == '+') {
    console.log(a + b)
}

if (a + b) {
    console.log(a + b, a - b, a * b, a / b)
}












for (let volta = 0; volta <50; volta++) {
    console.log(volta + 1);
}

let volta= 0;
while(volta <50) {
    volta++;
    console.log(volta);
}






for (let volta = 50; volta >0; volta --) {
    console.log(volta);
}

let volta = 50;

while(volta >1) {
    volta --;
    console.log(volta);
}









let tabuada = 5;
let vezes = 1;

while(vezes <=10){
    console.log(tabuada * vezes);
    vezes++;
}





let n_escolhido = 29;
for (let valor_par = 0; valor_par <= n_escolhido; valor_par = valor_par + 2){
    console.log(valor_par)
}




let volta = 15;
let fatorial = 1;
while(volta > 0){
    fatorial = fatorial * volta;
    volta--;
}
console.log(fatorial);




