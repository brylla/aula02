
let dia = Number(prompt("Digite o dia:"));
let mes = Number(prompt("Digite o mês:"));
let ano = Number(prompt("Digite o ano:"));

if (dia < 1) {
    console.log("Data inválida!");
} else if (dia > 31) {
    console.log("Data inválida!");
} else if (mes < 1) {
    console.log("Data inválida!");
} else if (mes > 12) {
    console.log("Data inválida!");
} else if (ano < 1) {
    console.log("Data inválida!");
} else {
    console.log("Data válida!");
}
