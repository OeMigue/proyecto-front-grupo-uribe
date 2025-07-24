import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";
let inputs = document.querySelectorAll("form input")
inputs.forEach(function (input) {
    input.addEventListener("keyup", (e/*evento*/)=>{
        //console.log(e.target.name); 
        switch (e.target.name) {
            case "nombre":
                // console.log(e.target.value);
                if (REGEX_PATTERNS.nombre.test(e.target.value)) {
                    console.log(`cumple la expresion regular`);
                    document.getElementById("nombre").style.backgroundColor = "red"
                }else{
                    console.log(`No cumple la expresion regular`);
                    
                }
                break;
            case "apellido":
                console.log(e.target.value);
                break;
            case "documento":
                console.log(e.target.value);
                break;
            case "telefono":
                console.log(e.target.value);             
                break;
        }
        
    })












    /* input.addEventListener("keydown", ()=>{
        console.log();
        
    })
    input.addEventListener("blur", ()=>{
        console.log();
        
    }) */
})
