console.log(document.domain)
console.log(document.URL)
console.log(document.title)
// document.title="123"
console.log(document.doctype)
console.log(document.head)
console.log(document.body)

//Get Element by ID

var headerTitle=document.getElementById('header-title')
// headerTitle.innerText="Hello"
// headerTitle.textContent="GoodBye"
headerTitle.style.borderBottom="solid 3px #000"

var addItem=document.querySelector('.title')
addItem.style.fontWeight="900"
addItem.style.color="green"