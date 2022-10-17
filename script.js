let nameInp = document.querySelector('#name')
let email = document.querySelector('#email')
let btn=document.querySelector('.btn')

btn.addEventListener('click', submit)
function submit(){
    if (nameInp.value.length<3 || email.value.indexOf('@')==-1){
        alert("Enter valid input!")
    }
    else{
        alert("Submitted Successfully!")
        localStorage.setItem('name',nameInp.value)
        localStorage.setItem('email',email.value)
    }
}