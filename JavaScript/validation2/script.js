var a = document.getElementById('name').value;
function check(){
    if(a == ""){
        document.getElementById('name1').innerHTML = " It should not be null!"
    }

    if(a.length < 4){
        document.getElementById('name1').innerHTML = " Too short! At least 4 characters"
    }

    if(!isNaN(a)){
        document.getElementById('name1').innerHTML =  " Should contain letters only!"
    }
}