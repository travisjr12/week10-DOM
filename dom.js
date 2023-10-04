//each section has its own id//
let id= 0;
//gets the values of current date from the table// 
document.getElementById('add').addEventListener('click', () => {
  let createdDate = new Date();
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  row.setAttribute('id', `item-${id}`);
  //getting value from each row cell and apply it to the dates and task//
  row.insertCell(0).innerHTML = document.getElementById('new-task').value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
  row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById('new-task').value = '';

});
//when clicked takes from actions in cell 4 where we created the button and makes createDeleteButton work//
function createDeleteButton(id) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = id;
  btn.innerHTML = 'Delete';
  btn.onclick= () => {
    console.log(`delete row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    //referencing the element to delete to the parent and child, which allows us to use the button Delete with the tasks created in the parent and child relationship//
  elementToDelete.parentNode.removeChild(elementToDelete);
  };
return btn;
}