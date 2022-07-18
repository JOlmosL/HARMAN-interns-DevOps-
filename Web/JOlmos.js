FechaTiempo();

function FechaTiempo() {
    var hoy = new Date();
    var fecha = (hoy.getMonth()+1) + '/' + hoy.getDate()+ '/' + hoy.getFullYear();
    var tiempo = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "." + hoy.getMilliseconds();
    var Tiempo_Actual = fecha+' '+tiempo;
    document.getElementById("DateTime").innerHTML = Tiempo_Actual;
}