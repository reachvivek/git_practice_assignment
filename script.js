//Global Variables
var url='https://crudcrud.com/api/54c028ad1e8c4d279db482b69021cb08/appointmentData'

// Input Variables
let nameInp=document.querySelector('#name')
let emailInp=document.querySelector('#email')
let phoneInp=document.querySelector('#phone')
let submit=document.querySelector('#submit')
let listGroup=document.querySelector('.list-group-item')

//Event Listener
submit.addEventListener('click', createBooking)

// Show Bookings
function showBooking(res="") {
	if(res!==""){
		displayData(res)
	}
	else{
		axios({
			method: 'get',
			url: url
		}).then(res=>displayData(res)).catch(err=>console.log(err))
	}

	function displayData(res=''){
		if (res.data.length>0){
			res.data.map(bookings=>{
				let listItem=document.createElement('li')
				listItem.innerHTML=(`${bookings.name} <span>${bookings.phone}</span> ${bookings.email} <button id=${bookings._id} class='del-btn'>x</button>`)
				listGroup.appendChild(listItem)
			})
			let delBtns=document.querySelectorAll('.del-btn')
			for (let i=0; i<delBtns.length; i++){
				delBtns[i].addEventListener('click', deleteBooking)
			}
		}
		else{
			listGroup.appendChild(document.createTextNode('No Bookings Available!'))
		}
	}
}

// Create Booking
function createBooking(e) {
	e.preventDefault()
	let name=nameInp.value, email=emailInp.value, phone=phoneInp.value
	axios({
		method: 'post',
		url: url,
		data: {
			name: name,
			phone: phone,
			email: email
		}
	}).then(res=>res.status==201?location.reload():console.log(res)).catch(err=>console.log(err))
}

function deleteBooking(event){
	console.log(event.target.id)
	axios({
		method: 'delete',
		url: `${url}/${event.target.id}`
	}).then(result=>{
		console.log(result)
		if (result.status==200){
			axios({
				method: 'get',
				url: url
			}).then(res=>displayData(res)).catch(err=>console.log(err))
	
			function displayData(res=''){
				if (res.data.length>0){
					res.data.map(bookings=>{
						let listItem=document.createElement('li')
						listItem.innerHTML=(`${bookings.name} <span>${bookings.phone}</span> ${bookings.email} <button id=${bookings._id} class='del-btn'>x</button>`)
						listGroup.innerHTML=""
						listGroup.appendChild(listItem)
					})
					let delBtns=document.querySelectorAll('.del-btn')
					for (let i=0; i<delBtns.length; i++){
						delBtns[i].addEventListener('click', deleteBooking)
					}
				}
				else{
					listGroup.innerHTML=""
					listGroup.appendChild(document.createTextNode('No Bookings Available!'))
				}
			}
		}
	}).catch(err=>console.log(err))
}
showBooking()




