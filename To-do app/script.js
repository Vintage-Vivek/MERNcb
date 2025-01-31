const TodoApp = document.querySelector('.TodoApp')
const inputText = document.querySelector('.inputText')
function addList(){
     

if(inputText.value != ''){
    const listParent = document.createElement('div')

    const listText = document.createElement('p');
     const deleteBtn = document.createElement('button');

     listText.textContent= inputText.value;
     deleteBtn.textContent = 'Delete'; 
     

     
     
     listParent.classList.add('listParent')
     listText.classList.add('listText')
     deleteBtn.classList.add('deleteBtn')
     
     listParent.appendChild(listText);
     listParent.appendChild(deleteBtn);

     TodoApp.appendChild(listParent)
     
     deleteBtn.addEventListener('click',()=>{
         TodoApp.removeChild(listParent)

     })

     listParent.addEventListener('click',()=>{
        // listParent.style.backgroundColor = 'green'
        listParent.classList.toggle('completed')

     })

      
     inputText.value = ''
     




}



}