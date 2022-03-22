async function confirmInput() {
    const user = document.querySelector("#user").value
    const pw = document.querySelector("#pw").value   
    try {
        var response = await fetch(`http://localhost:3000/login/${user}/${pw}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        console.log(response.text())
    } 
    catch (err) {
        console.log(err.message);
    }
}
    /*else {
        alert("Invalid Credentials! Please try again")
        event.preventDefault();
    }*/
