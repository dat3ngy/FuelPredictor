function gallonCal(){
    const galreq = document.querySelector("#gallonRequest").value;
    document.getElementById("printtotal").innerHTML = '$' + (3.05*galreq).toFixed(2);
}