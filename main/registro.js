let registrados=JSON.parse(localStorage.getItem("registrados"));
let hayRegistrado=false;
window.onload = () => { 
    const btnRegistro=document.getElementById("btnRegistro");
    btnRegistro.addEventListener("click",(e)=>{
        
        const email=document.getElementById("email").value;
        const contraseña=document.getElementById("contraseña").value;
        if(validarDatos(email,contraseña)){
             if(registrados==null){
                 registrados=[];
             }
             else{
                 registrados.forEach(element => {
                     if(element.email==email){
                         alert("El email ya esta registrado");
                         hayRegistrado=true;
                         return;
                     }
                 });
             }
             if(!hayRegistrado){
                 alert("Registro exitoso");
                 const registrado={email,contraseña};
                 registrados.push(registrado);
                 localStorage.setItem("registrados",JSON.stringify(registrados));
             } 
        }
        else{
           e.preventDefault();
        }
    });
}
const validarDatos=(email,contraseña)=>{
    if(email=="" || contraseña==""){
        alert("Debe llenar todos los campos");
        return false;
    }
    else{
        if(!validarEmail(email)){
            alert("El email no es valido");
            return false;
        }
        else{
            if(!validarContraseña(contraseña)){
                alert("La contraseña debe tener al menos 8 caracteres,una mayuscula, una minuscula, y un numero");
                return false;
            }
            return true;
        }
    }
}
const validarEmail=(email)=>{
    //alfanumericos@alfanumericos.com
    const regex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
    return regex.test(email);
}
const validarContraseña=(contraseña)=>{
    //minimo 8 caracteres,al menos una mayuscula, al menos una minuscula, al menos un numero
    const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(contraseña);
}

validartarjeta=()=>{
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const formularioPrincipal= document.getElementById("contenedor-formulario-principal");

    const numeroTarjeta= document.getElementById("ttarjeta").value;
    const formnombres= document.getElementById("tnombres").value;
    const formcodigo= document.getElementById("tcodigo").value;

    const expresiones = {
        nombres: /^[a-z]/  ,
        tarjeta: /[1-9]{16}/,    
        codigo: /[1-9]{3}/
    }

    if( ! expresiones.tarjeta.test(numeroTarjeta)){
            alert("Número de tarjeta no válida");
            return false;
        }
     if( ! expresiones.nombres.test(formnombres) || formnombres!= rnombre.value + " " + rapellido.value){
            alert("La tarjeta debe tener como titular al cliente ingresado");
            return false;
         }           
      if( ! expresiones.codigo.test(formcodigo)){
            alert("Código de seguridad inválido");
            return false;
         }   
                 
    else{
        formularioTarjeta.style.display="none";
        formularioPrincipal.style.display="block";
        alert("Tarjeta agregada!");
        return true;
    }
}

formularioTarjeta=()=>{
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const formularioPrincipal= document.getElementById("contenedor-formulario-principal");

    formularioTarjeta.style.display="block";
    formularioPrincipal.style.display="none";
}

volveratras=(b)=>{
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const formularioPrincipal= document.getElementById("contenedor-formulario-principal");

    formularioTarjeta.style.display="none";
    formularioPrincipal.style.display="block";
}