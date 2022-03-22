
async function gallonCal(){
    const galreq = document.querySelector("#gallonRequest").value;
    var datereq = document.querySelector("#dateRequest").value;
    console.log(datereq);
    var total = (3.05*galreq).toFixed(2);
    try{
        const response = await fetch(`http://localhost:3000/quote/${galreq}/${datereq}/${total}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        document.getElementById("printtotal").innerHTML = '$' + total;
    }catch(err){
        console.log(err.message);
    }
}


window.onload = async function fuelQuoteHist() {
    try{
        const response = await fetch(`http://localhost:3000/quote`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const quote = await response.json();
        if (quote.datereqs.length > 0){            
            var btn = document.getElementById("hist");
            btn.innerHTML = "";
            console.log(quote.datereqs.length);
            for (var i = 0; i < quote.datereqs.length; i++){
                btn.innerHTML += quote.datereqs[i] + "<div style='border-style: double'> <h3>" + "Rate: $3.05" + "<br> Gallon(s) requested: " + quote.galreqs[i] + "<br> Total: $" + quote.totals[i] + "</h3></div><br>";
            }
        }
    } catch(err){
        console.log(err.message);
    }
}