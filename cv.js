function ChangeHeaderOnLoad(){
    document.getElementById("Title").innerHTML="Omri Canaan CV";
}
function thankyou() {
    document.getElementById("Button").innerHTML = "Thank you for visiting"; 
}
function Namevalidation() {
    var check = 0;
    for ( let i=1; i<4; i++){
        var x = "id"+i;
        console.log(x);
        var inpObj = document.getElementById(x);
        if (!inpObj.checkValidity()) {
            check = check +1 ;
            inpObjBAD = document.getElementById(x);
            console.log(check) 


