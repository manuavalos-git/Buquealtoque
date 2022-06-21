
window.onload = () => { 
    const btnInicioSesion=document.getElementById("btnInicioSesion");

    btnInicioSesion.addEventListener("click",(e)=>{
        e.preventDefault();
        const email=document.getElementById("email").value;
        const contraseña=document.getElementById("contraseña").value;
        verificarRegistrado(email,contraseña);
        
    });
    btnRegistrarme.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.href="registro.html";
    });
}
const verificarRegistrado=(email,contraseña)=>{  
    const registrados=JSON.parse(localStorage.getItem("registrados"));
    let hayRegistrado=false;
    registrados.forEach(element => {
        if(element.email==email && element.contraseña==contraseña){
            localStorage.setItem("inicio","true");
            hayRegistrado=true;
            alert("Bienvenido");
            window.location.href="index.html";
        }
    });
    if(!hayRegistrado){
    alert("Contraseña y/o email incorrectos");
    }
}        