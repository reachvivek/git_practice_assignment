var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var liItems=document.getElementsByClassName("list-group-item")
console.log(liItems)

for (let i=0; i<4; i++){
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`Title ${i+1}`));
    li.appendChild(document.createElement('br'))
    li.appendChild(document.createTextNode(`Description ${i+1}`));
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-sm float-right edit'
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
    console.log(liItems[i])
}
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItemDesc = document.getElementById('desc').value;

  // Create new li element
  var li = document.createElement('li');
  var br = document.createElement('br');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(`${newItem}`));
  li.appendChild(br)
  li.appendChild(document.createTextNode(`${newItemDesc}`));
  // Create del button element
  var deleteBtn = document.createElement('button');

  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  editBtn.className='btn btn-sm float-right edit'

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
  newItem.value="";
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemDesc = item.firstChild.nextSibling.nextSibling.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) !=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}