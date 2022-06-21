window.onload = () => {  
    ajustarFecha();
    const cargarPasaje=document.getElementById("cargarPasajes");
}

mostrarDisponibles=()=>{
    const destino = document.getElementById("destino");
    const div=document.getElementById("divDisponibilidad");

    if(document.getElementById("datetime").value==""){
        alert("Debe completar todos los campos");    
    } else {
        if (destino.value === "Carmelo"){
            div.innerHTML=`
            <div class="col">
            <div class="card" style="">
            <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Carmelo</h5>
                <p class="card-text">Visite Carmelo! Buque Directo y beneficios extra si es cliente premium! $15.053 por persona!</p>
                <a  class="btn btn-primary" id="daytour1">Comprar</a>
                </div>
            </div>
            </div>
            `;
        } else if (destino.value === "Montevideo") {
            div.innerHTML=`
            <div class="col">
            <div class="card" style="">
            <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Montevideo</h5>
                <p class="card-text">Visite Montevideo! Buque Directo y beneficios extra si es cliente premium! $19.343 por persona!</p>
                <a  class="btn btn-primary" id="daytour1">Comprar</a>
                </div>
            </div>
            </div>
            `;
        } else {
            div.innerHTML=`
            <div class="col">
            <div class="card" style="">
            <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Colonia</h5>
                <p class="card-text">Visite Colonia! Buque Directo y beneficios extra si es cliente premium! $11.063 por persona!</p>
                <a  class="btn btn-primary" id="daytour1">Comprar</a>
                </div>
            </div>
            </div>
            `;
        }
        daytour1.addEventListener("click",(e)=>{
            e.preventDefault();
            if(localStorage.getItem("inicio")=="true"){
                alert("Compra realizada");
            }
            else{
                alert("Debe iniciar sesión para comprar un producto!");
                /*window.location.href="inicioSesion.html";*/
            }
        });
        return false;
    }
}    

/*const cargar=cargarPasajes.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.getElementById("datetime").value=="" ||document.getElementById("validationSelect").value==""){
        alert("Debe completar todos los campos");    
    }
    else{
    const div=document.getElementById("divDisponibilidad");
    div.innerHTML=`
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Carmelo</h5>
            <p class="card-text">Visite Carmelo! Buque Directo y beneficios extra si es cliente premium! $15.053 por persona!</p>
            <a  class="btn btn-primary" id="daytour1">Comprar</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Montevideo</h5>
            <p class="card-text">Visite Montevideo! Buque Directo y beneficios extra si es cliente premium! $25.076 por persona!</p>
            <a class="btn btn-primary" id="daytour2">Comprar</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Colonia</h5>
            <p class="card-text">Visite Colonia! Buque Directo y beneficios extra si es cliente premium! $12.046 por persona!</p>
            <a  class="btn btn-primary" id="daytour3">Comprar</a>
            </div>
        </div>
    </div>
    `;*/

    

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
    today = yyyy + '-' + mmx + '-' + dd;
    document.getElementById("datetime").setAttribute("max", today);
}
