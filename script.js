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
        if (localStorage.getItem('userDetails')==null){
            let details={
                name:nameInp.value,
                email:email.value
            }
            localStorage.setItem('userDetails',[JSON.stringify(details)])
            console.log(localStorage.getItem('userDetails'))
        }
        else{
            let prev=localStorage.getItem('userDetails')
            let array=[]
            array.push(prev)            
            let details={
                name:nameInp.value,
                email:email.value
            }
            array.push(JSON.stringify(details))
            localStorage.removeItem('userDetails')
            localStorage.setItem('userDetails', array)
            console.log(localStorage.getItem('userDetails'))
        }
        // if (localStorage.getItem(userDetails)==null){
        //     let userDetails={
        //         name:nameInp.value,
        //         email:email.value
        //     }
        //     localStorage.setItem('userDetails',JSON.stringify(userDetails))
        // }
        // else {
        //     let arr=localStorage.getItem('userDetails')
        //     let userDetails={
        //         name:nameInp.value,
        //         email:email.value
        //     }
        //     arr.push(JSON.stringify(userDetails))
        //     localStorage.setItem('userDetails', arr)
        // }
        
    }
}