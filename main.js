let datos = [
    {"tag":"Python: ", "valor": 80},
    {"tag":"Java: ", "valor": 60},
    {"tag":"HTML: ", "valor": 40},
    {"tag":"CSS: ", "valor": 40},
    {"tag":"JavaScript: ", "valor": 40}
]
function escribir(elemento, indice) {
    elemento.innerHTML = datos[indice]["tag"] + datos[indice]["valor"] + "/100";
}

escribir(document.getElementById("text1"),0);
escribir(document.getElementById("text2"),1);
escribir(document.getElementById("text3"),2);
escribir(document.getElementById("text4"),3);
escribir(document.getElementById("text5"),4);

let send = document.getElementById("boton");
send.addEventListener("click", function(){
    let name = document.getElementById("nombre");
    let mail = document.getElementById("correo");
    let msj = document.getElementById("msj");
    if ((name.textContent==="") || (mail.textContent==="") || (msj.textContent==="")) {
        alert("Uno o más campos están vacíos");
    }
    else {
        alert("Mensaje enviado ;)");
    }
})