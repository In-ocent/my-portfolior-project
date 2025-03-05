
let erroElement = document.getElementById("erro")
let nameElement = document.getElementById("name")
let emailElement = document.getElementById('email')
let submitElement = document.getElementById('submit')


submitElement.addEventListener("click",()=>{
    if (emailElement.value == "") {
        erroElement.innerText = "input your email";
        emailElement.style.border = "solid"
        emailElement.style.borderColor = "red"
          erroElement.style.color ="red"
    }
    if (emailElement.value) {
         emailElement.style.border = "solid"
         emailElement.style.borderColor = "blue"
        emailElement.style.borderRadius = "5rem"
         erroElement.innerHTML = "successful"
         erroElement.classList.add("good")
         erroElement.style.color ="blue"
         
    }
})