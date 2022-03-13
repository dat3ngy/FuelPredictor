
username = "Nghia"
password = "1"
console.log('testing line');



async function confirmInput() {
    const user = document.querySelector("#user").value;
    const pw = document.querySelector("#pw").value;
    if (user == username && pw == password) {       
        console.log('testing line');     
        try{
            const response = await fetch(`http://localhost:3000/login/${user}/${pw}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            
        } catch(err){
            console.log(err.message);
        }
    }
    else {
        alert("Invalid Credentials! Please try again")
        event.preventDefault();
    }
}
