window.onload = () => {  
    ajustarFecha();
    const cargarPasaje=document.getElementById("cargarPasajes");
}

const cargar=cargarPasajes.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.getElementById("datetime").value==""||document.getElementById("datetime2").value==""||document.getElementById("origen").value=="" ||document.getElementById("validationSelect").value==""){
       
        if(document.getElementById("datetime2").getAttribute("disabled")==null){
            if(document.getElementById("datetime2").value==""){
                // alert("La fecha de vuelta no puede estar vacia");
            }
        }
        else{
            return;
        }
        alert("Debe completar todos los campos");
    }
    else{
    const div=document.getElementById("divDisponibilidad");
    div.innerHTML=`
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a  class="btn btn-primary" id="pasaje1">Comprar</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary" id="pasaje2">Comprar</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a  class="btn btn-primary" id="pasaje3">Comprar</a>
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
            window.location.href="inicioSesion.html";
        }
    });
    pasaje2.addEventListener("click",(e)=>{
        e.preventDefault();
        if(localStorage.getItem("inicio")=="true"){
            alert("Compra realizada");
        }
        else{
            window.location.href="inicioSesion.html";
        }
    });
    pasaje3.addEventListener("click",(e)=>{
        e.preventDefault();
        if(localStorage.getItem("inicio")=="true"){
            alert("Compra realizada");
        }
        else{
            window.location.href="inicioSesion.html";
        }
    });
    return false;
}
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
