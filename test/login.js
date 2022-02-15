username = "sample username"
password = "sample password"

function confirmInput() {
    user = document.forms[0].user.value
    pw = document.forms[0].pw.value
    if (user == username && pw == password) {
        alert("Success!")
        window.open("menu.html")
    }
    else {
        alert("Invalid Credentials! Please try again")
    }
}