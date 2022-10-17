let nameInp = document.querySelector('#name')
let email = document.querySelector('#email')
let btn=document.querySelector('.btn')
btn.addEventListener('click', submit)

let arr = JSON.parse(localStorage.getItem('userDetails'))
if (arr){
    arr.map(item=>{
        var li=document.createElement('li')
        li.className='list-group-item'
        var det=document.createTextNode(`${item.name} ${item.email}`)
        li.append(det)
        items=document.getElementById('users')    
        items.appendChild(li)
    })
}


function submit(){
    if (nameInp.value.length<3 || email.value.indexOf('@')==-1){
        alert("Enter valid input!")
    }
    else{
        alert("Submitted Successfully!")
        if (localStorage.getItem('userDetails')==null){
            let details=[{
                name:nameInp.value,
                email:email.value
            }]
            localStorage.setItem('userDetails',JSON.stringify(details))
            console.log(localStorage.getItem('userDetails'))
        }
        else{
            let prev=JSON.parse(localStorage.getItem('userDetails'))            
            let details={
                name:nameInp.value,
                email:email.value
            }
            prev.push(details)
            localStorage.removeItem('userDetails')
            localStorage.setItem('userDetails', JSON.stringify(prev))
            console.log(localStorage.getItem('userDetails'))
            
        }
        location.reload()
    }
}