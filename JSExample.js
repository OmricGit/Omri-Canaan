let txt = "abcdefghijklmnopqrstuvwxyz" ;
txt. length;
console.log(txt.length);

let txt1 = "Please visit Sopher" ;
let txt2 = txt1.replace("Sopher", "BGU");
console.log(txt2);

let txt3 = txt1.concat(" and ", txt2);
console.log(txt3);


//console.log(d);

function greet(){
    const d = new Date();
    var h = d.getHours();
    console.log(h);
    if (h<12) {
        let greeting2 = "Great morning ya'll";
        console.log(greeting2);
    
        document.getElementById("1").innerHTML= greeting2;
    } else if(h>18){
        let greeting = "Great noon everybody";
        console.log(greeting);
    }
    else{
        let greeting3 = "Lovely evening";
        console.log(greeting3);
    }
}

let cars = ['Tesla', 'audi', 'lexus'];
console.log(cars);
text = "";
var i ;
for(i=0; i<cars.length; i++){
    text += cars[i] + " ";
    console.log(text);


}


    var imgs = [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
    ];
    var i=0;
   function stopMotion(){
        setTimeout(() => {

    document.getElementById("SMing").src = imgs[i];
    i++;
    if (i<imgs.length) {
        stopMotion();
    }
    else {
        i=0;

    }
} , 500);

function myloop(){
    setTimeout(500) ;
}

//    document.getElementById("SMing").src = "pic1.jpg";
var person = {
firstname: "Omri",
lastname: "Canaan",
id: 0456,
fullname : function() { return this.firstname + " " + this.lastname }
} ;
console.log(person.fullname()) ;