//Traversing the DOM
let itemlist=document.querySelector('#items')
itemlist.parentNode.style.backgroundColor="#f4f4f4"
//1
itemlist.parentElement.style.backgroundColor="#gray"
//2
itemlist.lastElementChild.style.backgroundColor="green"

itemlist.lastElementChild.textContent="Hello 4"

let itemTitle=document.querySelector('.title')
//3
itemTitle.lastChild.textContent="Hello Title"
//6
itemTitle.firstChild.textContent="Add Items"
//5
itemlist.firstElementChild.style.backgroundColor="yellow"
//11
let newDiv=document.createElement('div')
newDiv.className="hello"
newDiv.id="hello1"
//12
newDiv.setAttribute('title', 'Hello Div')
//13
let newDivText=document.createTextNode('Hello World')
//14
newDiv.appendChild(newDivText)

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')

console.log(container, h1)
//1
container.insertBefore(newDiv, h1)
itemlist.insertBefore(newDiv, itemlist.firstElementChild)