window.onload = () => {  
    ajustarFecha();
    const cargarPasaje=document.getElementById("cargarPasajes");
}

const cargar=cargarPasajes.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.getElementById("origen").value=="" || document.getElementById("validationSelect").value=="" ){
        alert("Debe completar el origen y el destino");
        return;
    }   
    if(document.getElementById("datetime").value==""){
        alert("Debe completar la fecha de ida");
        return;
    }
    if(document.getElementById("datetime2").getAttribute("disabled")==null){
        if(document.getElementById("datetime2").value==""){
                alert("Debe completar la fecha de vuelta");
                return;
        }
        else{
         
        }
    }
    const div=document.getElementById("divDisponibilidad");
    const destino=document.getElementById("validationSelect").value;
    const origen=document.getElementById("origen").value;
    div.innerHTML=`
    <div class="col">
        <div class="card" style="">
        <img src="" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${origen} a ${destino}</h5>
            <p class="card-text">El viaje de ${origen} a ${destino} tiene un valor de $29.098, aproveche ahora!</p>
            <a  class="btn btn-primary" id="pasaje1">Comprar</a>
            </div>
        </div>
    </div>
    `;
    pasaje1.addEventListener("click",(e)=>{
        e.preventDefault();
        if(localStorage.getItem("inicio")=="true"){
            alert("Compra realizada");
        }
        else{
            alert("Debe iniciar sesión para comprar un producto!");
            /*window.location.href="inicioSesion.html";*/
        }
    });
});
function handleChange1() {
    datetime2.removeAttribute("disabled");
}
function handleChange2() {
    datetime2.setAttribute("disabled", "disabled");
};
function ajustarFecha() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var mmx = today.getMonth() + 7;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (mmx < 10) {
        mmx = '0' + mmx;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("datetime").setAttribute("min", today);
    document.getElementById("datetime2").setAttribute("min", today);
    today = yyyy + '-' + mmx + '-' + dd;
    document.getElementById("datetime").setAttribute("max", today);
    document.getElementById("datetime2").setAttribute("max", today);
}
