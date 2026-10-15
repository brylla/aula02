var temperatura = 20
var tipoTemperatura = "C"
var temperaturaConvertida = 0
"c" == "C"

if (tipoTemperatura=="C") {
    console.log("Você escolheu Celsius!")
    temperaturaConvertida=((temperatura*1.8) + 32)
}else{
    console.log("Você escolheu Fahrenheit")
    temperaturaConvertida=((temperatura- 32) * (5/9))
}

console.log("O valor convertido é: " + temperaturaConvertida)
