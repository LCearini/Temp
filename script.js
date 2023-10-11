document.querySelector("button").onclick=()=>{
    let tempInicial=document.getElementById("tempInicial").value;
    let tempFinal=document.getElementById("tempFinal").value;
    let temp=parseFloat(document.querySelector("input[name=temp").value);
    let resultado=document.getElementById("resultado");
    let tempConvertida;

    if(tempInicial==tempFinal){
        resultado.innerHTML="As temperaturas são iguais!";
        return;
    }
   
    switch(tempInicial){
        
        case "Celsius":
            switch(tempFinal){
                case "Fahrenheit":
                    tempConvertida = temp * 1.8 + 32;
                    resultado.innerHTML = temp + " graus Celsius são " + tempConvertida + " graus Fahrenheit";
                    break;
                case "Kelvin":
                    tempConvertida = temp + 273.15;
                    resultado.innerHTML = temp + " graus Celsius são " + tempConvertida.toFixed(2) + " graus Kelvin";
                    break;
                case "Rankine":
                    tempConvertida = (temp + 273.15) * 1.8;
                    resultado.innerHTML = temp + " graus Celsius são " + tempConvertida.toFixed(2) + " graus Rankine";
                    break;
                default:
                    tempConvertida=temp;
                    resultado.innerHTML="Unidade de temperatura final inválida!";
                    break;
            }
            break;
        case "Fahrenheit":
            switch(tempFinal){
                case "Celsius":
                    tempConvertida = (temp - 32) / 1.8;
                    resultado.innerHTML = temp + " graus Fahrenheint são " + tempConvertida.toFixed(2) + " graus Celsius";
                    break;
                case "Kelvin":
                    tempConvertida = (temp + 459.67) / 1.8;
                    resultado.innerHTML = temp + " graus Fahrenheint são " + tempConvertida.toFixed(2) + " graus Kelvin";
                    break;
                case "Rankine":
                    tempConvertida = temp + 459.67;
                    resultado.innerHTML = temp + " graus Fahrenheint são " + tempConvertida.toFixed(2) + " graus Rankine";
                    break;
                default:
                    tempConvertida=temp;
                    resultado.innerHTML="Unidade de temperatura final inválida!";
                    break;
            }
            break;
        case "Kelvin":
            switch(tempFinal){
                case "Celsius":
                    tempConvertida = temp - 273.15;
                    resultado.innerHTML = temp + " graus Kelvin são " + tempConvertida.toFixed(2) + " graus Celsius";
                    break;
                case "Fahrenheit":
                    tempConvertida = temp * 1.8 - 459.67;
                    resultado.innerHTML = temp + " graus Kelvin são " + tempConvertida.toFixed(2) + " graus Fahrenheit";
                    break;
                case "Rankine":
                    tempConvertida = temp * 1.8;
                    resultado.innerHTML = temp + " graus Kelvin são " + tempConvertida.toFixed(2) + " graus Rankine";
                    break;
                default:
                    tempConvertida=temp;
                    resultado.innerHTML="Unidade de temperatura final inválida!";
                    break;
            }
            break;
        case "Rankine":
            switch(tempFinal){
                case "Celsius":
                    tempConvertida = (temp / 1.8) - 273.15;
                    resultado.innerHTML = temp + " graus Rankine são " + tempConvertida.toFixed(2) + " graus Celsius";
                    break;
                case "Fahrenheit":
                    tempConvertida = temp - 459.67;
                    resultado.innerHTML = temp + " graus Rankine são " + tempConvertida.toFixed(2) + " graus Fahrenheit";
                    break;
                case "Kelvin":
                    tempConvertida = temp / 1.8;
                    resultado.innerHTML = temp + " graus Rankine são " + tempConvertida.toFixed(2) + " graus Kelvin";
                    break;
                default:
                    tempConvertida=temp;
                    resultado.innerHTML="Unidade de temperatura final inválida!";
                    break;
            }
    }
 }

