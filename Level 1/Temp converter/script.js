function convertTemp(){

let temp=document.getElementById("tempInput").value;
let unit=document.getElementById("unit").value;
let result=document.getElementById("result");

if(temp===""){
result.innerHTML="Please enter temperature";
return;
}

if(unit==="celsius"){

let f=(temp*9/5)+32;
result.innerHTML=temp+"°C = "+f.toFixed(2)+" °F";

}

else{

let c=(temp-32)*5/9;
result.innerHTML=temp+"°F = "+c.toFixed(2)+" °C";

}

}
