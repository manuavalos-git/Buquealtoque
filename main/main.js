window.onload = () => { 
    ajustarFecha();
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
