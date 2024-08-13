
const btnEncriptar = document.querySelector('.btn__encriptar');
const txtEncriptar = document.querySelector('.encriptar');
const aviso = document.querySelector('.texto__aviso');
const respuesta = document.querySelector('.evaluar');
const contenido = document.querySelector('.tarjeta__contenedor');
const btnCopiar = document.querySelector('.btn__copiar');
const btnDesencriptar = document.querySelector('.btn__desencriptar');


function encrypt(string){
    let encrypted = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a"){
            encrypted += "ai";
        }
        else if(string[i] === "e"){
            encrypted += "enter";
        }
        else if(string[i] === "i"){
            encrypted += "imes";
        }
        else if(string[i] === "o"){
            encrypted += "ober";
        }
        else if(string[i] === "u"){
            encrypted += "ufat";
        }
        else{
            encrypted += string[i];
        }
    }
    return(encrypted);
}

function decrypt(string){
    let decrypted = string.replace(/ai/g, "a")
                        .replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");
return decrypted;
}

//encriptar

btnEncriptar.addEventListener("click", async e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto === "") {
    await Swal.fire({
        title: "¡Atención!",
        text: "Por favor, ingrese un texto para encriptar.",
        icon: "info",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    
    });
    } else if(texto !==txt){
    await Swal.fire({
        title: "¡Atención!",
        text: "El texto contiene caracteres especiales. Elimínelos para continuar.",
        icon: "info",
        confirmButtonColor: "#0A3871",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    });
    } else if(texto!==texto.toLowerCase()){
    await Swal.fire({
        title: "¡Atención!",
        text: "El texto contiene mayúsculas. Conviértalas a minúsculas para continuar.",
        icon: "info",
        confirmButtonColor: "#0A3871",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    });
    } else{
    respuesta.innerHTML = encrypt(texto);
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
    }
});

//desencriptar 

btnDesencriptar.addEventListener('click', async e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto === "") {
    await Swal.fire({
        title: "¡Atención!",
        text: "Por favor, ingrese un texto para encriptar.",
        icon: "info",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    
    });
    } else if(texto !==txt){
    await Swal.fire({
        title: "¡Atención!",
        text: "El texto contiene caracteres especiales. Elimínelos para continuar.",
        icon: "info",
        confirmButtonColor: "#0A3871",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    });
    } else if(texto!==texto.toLowerCase()){
    await Swal.fire({
        title: "¡Atención!",
        text: "El texto contiene mayúsculas. Conviértalas a minúsculas para continuar.",
        icon: "info",
        confirmButtonColor: "#0A3871",
        customClass: {
            confirmButton: 'swal2-confirm-custom'
        }
    });
    }
    else{
        respuesta.innerHTML = decrypt(texto);
        btnCopiar.style.visibility = "inherit"; 
        contenido.remove();
    }

});

btnCopiar.addEventListener('click', e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand('copy');

});

