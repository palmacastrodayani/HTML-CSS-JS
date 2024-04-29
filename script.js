// Definición de variables
var userName = "Iris"; // Variable de tipo string para almacenar el nombre de usuario
var userAge = 17; // Variable de tipo entero para almacenar la edad del usuario
var isStudent = true; // Variable de tipo booleano para indicar si el usuario es estudiante o no

// Función para mostrar un saludo personalizado
function greetUser(name, age) {
    var greeting = "Hello, " + name + "!"; // Concatenación de strings para generar el saludo
    if (age > 18) {
        greeting += " You're an adult!";
    } else {
        greeting += " You're still a minor.";
    }
    return greeting;
}

// Llamada a la función greetUser y mostrar el resultado en la página
document.getElementById("output").innerText = greetUser(userName, userAge);

  