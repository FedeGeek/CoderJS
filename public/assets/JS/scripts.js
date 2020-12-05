let info = document.getElementsByClassName ("input")
let datos = []

function carga(){
    for (let i = 0; i < info.length; i++) {
        datos.push(info[i].value);
    }    
    console.log(datos)
}