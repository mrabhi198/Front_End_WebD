function check(){
    var a = document.getElementById('name').value;
    var b = document.getElementById('pwd').value;
    var c = document.getElementById('email').value;

    //for name
    if (a == ""){
        document.getElementById('name1').innerHTML = "It should not be null!";
    } else if (a.length < 5){
        document.getElementById('name1').innerHTML = "At least 5 characters are required.";
    } else if (!isNaN(a)){
        document.getElementById('name1').innerHTML = "Should contain letters only.";
    } else {
        document.getElementById('name1').innerHTML = ""
    }

    //for password
    if (b.length >= 8 || b.length <= 16){
        document.getElementById("pwd1").innerHTML = "Password must be greater than or equal to 8 and less than or equal to 16";
    }
    else {
        document.getElementById("pwd1").innerHTML = "";
    }

    //for email
    if (){
        
    }
}
