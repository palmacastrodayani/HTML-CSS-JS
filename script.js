// Definición de variables
var userName = "Iris"; 
var userAge = 17; 
var isStudent = true; 

function greetUser(name, age) {
    var greeting = "¡Hola, " + name + "! "; 
    if (age >= 18) {
        greeting += "¡Eres mayor de edad!";
    } else {
        greeting += "¡Eres menor de edad!";
    }
    return greeting;
}

var doubleAge = userAge * 2;

if (isStudent) {
    console.log("¡Eres un estudiante!");
} else {
    console.log("No eres un estudiante.");
}

if (userAge >= 18 && isStudent) {
    console.log("¡Eres mayor de edad y estudiante!");
} else {
    console.log("No cumples con los requisitos.");
}

console.log("El doble de tu edad es: " + doubleAge);
document.getElementById("output").innerText += "\nEl doble de tu edad es: " + doubleAge;
