function check() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('pwd').value;

    // Validation for name
    if (a == "") {
        document.getElementById('name1').innerHTML = " It should not be null!";
    } else if (a.length < 4) {
        document.getElementById('name1').innerHTML = " Too short! At least 4 characters";
    } else if (!isNaN(a)) {
        document.getElementById('name1').innerHTML = " Should contain letters only!";
    } else {
        document.getElementById('name1').innerHTML = "";
    }

    // Validation for password
    if (b.length <= 8 || b.length >= 16) {
        document.getElementById("pwd1").innerHTML = "Length of password must be between 8 and 16 characters";
    } else {
        document.getElementById("pwd1").innerHTML = ""; 
    }

}
