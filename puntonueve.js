//Declaro la funcion principal
function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        //Logica de la funcion principal
        let padawan={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}

//Llamar a la funcion principal

crearPadawan("Grohu","Yodora",500,30,function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`Padawan ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, por lo tanto vas a la clase de manejo de la fuerza`)
    }else{
        console.log(`Padawan ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, por lo tanto vas a la clase de manejo del sable de luz`)
    }
})