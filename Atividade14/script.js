function change() {
    var maiuscula = document.getElementById("radioMaiuscula").checked;
    var minuscula = document.getElementById("radioMinuscula").checked;

    if (maiuscula) {
        document.getElementById("entrada").value = document.getElementById("entrada").value.toUpperCase();   
        return;
    }

    document.getElementById("entrada").value = document.getElementById("entrada").value.toLowerCase();   


}