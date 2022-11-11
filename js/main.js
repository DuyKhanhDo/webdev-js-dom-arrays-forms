//IIET
(function (){
//start
document.getElementById("myHeading").innerHTML="Keith"
firstlistItem=document.querySelector("nav ul li").setAttribute("Class","currentPage")
console.info(firstlistItem)
firstlistItem.setAttribute("class","currentPage")
let firstLink=document.querySelector("nav ul li a")
firstLink.setAttribute("href","https://www.google.co.uk")
//add test event
document.getElementById("myTestEvent").addEventListener("click", myfunction)
console.info("hi")
//end
})()
