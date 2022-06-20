window.onload = () => { 
    ajustarFecha();
}

const cargarPasajes=()=>{
    const div=document.getElementById("divDisponibilidad");
    div.innerHTML=`
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `;
    return false;
}
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
