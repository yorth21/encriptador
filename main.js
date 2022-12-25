// Diccionario para encriptar y desencriptar
const encrypt = text => {
    return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

const decrypt = text => {
    return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}
// Expresion regular para validar el texto
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

function encriptar(e) {
    e.preventDefault();

    // Metodos para encriptar y mostrar en pantalla
    let text = document.getElementById('mensaje').value;
    // Validar si el texto cumple con la expresion regular
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }
    // Validar si hay texto para encriptar
    if (text != '') {
        text = encrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

function desencriptar(e) {
    e.preventDefault();

    // Metodos para encriptar y mostrar en pantalla
    let text = document.getElementById('mensaje').value;
    // Validar si el texto cumple con la expresion regular
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }
    // Validar si hay texto para encriptar
    if (text != '') {
        text = decrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

// Funcion para copiar el mensaje al portapapeles
async function copiarPortapapeles() {
    let text = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        // mostrar mensaje de copiado
        console.log("Texto copiado al portapapeles");
    } catch (err) {
        // mostrar mensaje de no copiado
        console.error("Error al copiar texto al portapapeles:", err);
    }
}

function resultado(text) {
    document.getElementById('texto').innerHTML = text;
    document.getElementById('vacio').classList.add('disable');
    document.getElementById('resultado').classList.remove('disable');
}

function sinResultado() {
    document.getElementById('vacio').classList.remove('disable');
    document.getElementById('resultado').classList.add('disable');
}

function alterta() {
    document.getElementById('alertText').classList.remove('disable');
    setTimeout(function() {
        document.getElementById('alertText').classList.add('disable');
    }, 3000);
}
