
async function gallonCal(){
    const galreq = document.querySelector("#gallonRequest").value;
    var datereq = document.querySelector("#dateRequest").value;
    console.log(datereq);
    var total = (3.05*galreq).toFixed(2);
    try{
        const response = await fetch(`http://localhost:3000/quote/${galreq}/${datereq}/${total}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        });
        document.getElementById("printtotal").innerHTML = '$' + total;
    }catch(err){
        console.log(err.message);
    }
}


window.onload = async function fuelQuoteHist() {
    try{
        //print fuel quote history
        const response1 = await fetch(`http://localhost:3000/quote`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        
        const quote = await response1.json();
        if (quote.rows.length > 0){            
            var btn = document.getElementById("hist");
            btn.innerHTML = "";
            for (var i = 0; i < quote.rows.length; i++){
                btn.innerHTML = "Date: " + quote.rows[i].deldate + "  <br> <span style='font-size: 80%'> Address: " + quote.rows[i].deladdr + "</span> <br><div style='border-style: double;'> <h3>" + "Rate: $3.05" + "<br> Gallon(s) requested: " + quote.rows[i].galreqs + "<br> Total: $" + quote.rows[i].total + "</h3></div><br>";
            }
        }
        console.log(quote);
        
    } catch(err){
        console.log(err.message);
    }
}
