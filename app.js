const form = document.querySelector(".container")
const errorMsg = document.querySelector(".error-msg")

const mail = document.querySelector("input")
const submitButton = document.querySelector(".container button")

const clientEmail = document.querySelector(".success p span")
const Success = document.querySelector(".success")
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const loader = document.querySelector(".loader")
mail.addEventListener("input", handleform)

const h1 = document.querySelector(".success h1")
const p = document.querySelector(".success p")
const buttonsuccess = document.querySelector(".success button")
function handleform(){
    if(!regexEmail.test(mail.value)){
        errorMsg.textContent = "Valid email required"
        mail.classList.add("error")
    }
    else{
        mail.classList.remove("error")
        errorMsg.style.visibility = "hidden"
    }
}
submitButton.addEventListener("click",()=>{
    if(!regexEmail.test(mail.value) || !mail.value){
        errorMsg.textContent = "Valid email required"
        mail.classList.add("error")
    }
    else{
        loader.style.display = "block"
        loader.classList.add("grow-shrink")
        errorMsg.style.display = "block"
        form.style.transform = "translateY(1500px)"
        Success.style.display = "block"
        h1.style.marginTop = "20px"
        p.style.marginTop = "20px"
        buttonsuccess.style.marginTop = "20px"
        Success.classList.add("speed")
        clientEmail.textContent = `${mail.value}`
    }

})

const dismissMsg = document.querySelector(".success button")
dismissMsg.addEventListener("click",()=>{
    alert("The message has been removed")
})

const mobileMail = document.querySelector(".mobile-form input")
const mobileMsg = document.querySelector(".mobile-form .error-msg")
mobileMail.addEventListener("input",()=>{
    if(!regexEmail.test(mobileMail.value)){
        
        mobileMail.classList.add("error")
        mobileMsg.style.display ="block"
    }
    else{
        mobileMail.classList.remove("error")
        mobileMsg.style.display ="none"
        
    }

})
const test = document.querySelector(".mobile-form .test")
const submitMobileform = document.querySelector(".test>button")
const succed = document.querySelector(".succed")
const mobilesucess = document.querySelector(".mobile-form p span")
submitMobileform.addEventListener("click",()=>{
    if(!regexEmail.test(mobileMail.value)){ 
        mobileMail.classList.add("error")
        mobileMsg.style.display ="block"
    }
    else{
        mobileMail.classList.remove("error")
        test.style.display = "none"
        mobileMsg.style.display ="none"
        succed.style.display = "block"
        mobilesucess.textContent = `${mobileMail.value}`
        mobilesucess.style.fontWeight = "700"
        
    }
    
})

const deleteMsg = document.querySelector(".succed button")
deleteMsg.addEventListener("click",()=>{
    alert("The message has been removed")
})

