var salario = 900
var calculoAumento

if (salario <= 1000) {
    console.log("Parabéns pelo aumento de 20%!")
    calculoAumento = salario * 0.20
} else if (salario <= 2000) {
    console.log("Parabéns pelo aumento de 15%!")
    calculoAumento = salario * 0.15
} else {
    console.log("Parabéns pelo aumento de 10%!")
    calculoAumento = salario * 0.10
}

console.log("Seu salário novo: " + (salario + calculoAumento))
