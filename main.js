var nest = document.getElementById("next")
var next = document.getElementById("next1")
var form1 = document.getElementById("form1")
var form2 = document.getElementById("Form2")
var form3 = document.getElementById("form3")
var Submit = document.getElementById("Submit")
var reset = document.getElementById("reset")
var form4 = document.getElementById("form4")

form2.style.display="none"
form3.style.display="none"
form4.style.display="none"
nest.addEventListener("click",function(){
    form1.style.display="none"
   
    form2.style.display="block"
})

next1.addEventListener("click", function(){
    form2.style.display="none"

    form3.style.display="block"
})

Submit.addEventListener("click", function(){
    form4.style.display="block"
    form3.style.display="none"

})

reset.addEventListener("click", function(){
    form1.style.display="block"
    form3.style.display="none"

})