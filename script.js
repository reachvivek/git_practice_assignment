let nameInp = document.querySelector('#name')
let email = document.querySelector('#email')
let btn=document.querySelector('.btn')
btn.addEventListener('click', submit)

let arr = JSON.parse(localStorage.getItem('userDetails'))
if (arr){
    arr.map((item, ind)=>{
        var li=document.createElement('li')
        var editBtn=document.createElement('button')
        editBtn.className='editBtn'
        editBtn.appendChild(document.createTextNode('Edit'))
        editBtn.style.float='right'
        editBtn.id=ind
        var delBtn=document.createElement('button')
        delBtn.className='delBtn'
        delBtn.id=ind
        delBtn.appendChild(document.createTextNode('Delete'))
        delBtn.style.float='right'
        li.className='list-group-item'
        var det=document.createTextNode(`${item.name} ${item.email}`)
        li.append(det)
        li.append(delBtn)
        li.append(editBtn)
        items=document.getElementById('users')    
        items.appendChild(li)
    })
}
let editBtn=document.querySelectorAll('.editBtn')
let delBtn=document.querySelectorAll('.delBtn')
for(let i=0; i<delBtn.length; i++){
    delBtn[i].addEventListener('click', deleteItem)
    editBtn[i].addEventListener('click', editItem)
}

function editItem(e){
    console.log(e.target.id)
    nameInp.value=arr[e.target.id].name
    email.value=arr[e.target.id].email
    arr.splice(e.target.value, 1)
    localStorage.removeItem('userDetails')
    localStorage.setItem('userDetails', JSON.stringify(arr))
}

function deleteItem(e){
    console.log(e.target.id)
    arr.splice(e.target.value, 1)
    localStorage.removeItem('userDetails')
    localStorage.setItem('userDetails', JSON.stringify(arr))
    location.reload()
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
            let duplicate;
            prev.map((it, ind) => {
                if (it.email==email.value){
                    duplicate=ind
                }
            });         
            
            if (duplicate!==undefined){
                prev.splice(duplicate, 1)
                console.log(prev)
            }

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