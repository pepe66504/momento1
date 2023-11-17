function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
console.log(obtenerNombre("454:juan"))

//funcion de flecha

let obtenerNombreFlecha = (codigo)=>codigo.split(":")[1]
console.log(obtenerNombreFlecha("000:yesid"))