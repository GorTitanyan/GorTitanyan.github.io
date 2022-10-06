
let txt=document.getElementById("parag")
txt.style.fontSize="56px"
onclick=(e)=>{
   txt.innerText=`X is : ${e.clientX} , Y is : ${e.clientY}`
}