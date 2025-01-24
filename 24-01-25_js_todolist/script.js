// script.js
// document.getElementById('addBtn').addEventListener('click', addTask);
// document.getElementById('taskInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// function addTask() {
//     let taskInput = document.getElementById('taskInput').value;
//     if (taskInput === '') {
//         alert('You must write something!');
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = `${taskInput} <button class="deleteBtn">Delete</button>`;
//         document.getElementById('taskList').appendChild(li);
//         document.getElementById('taskInput').value = '';
//         li.getElementsByClassName('deleteBtn')[0].addEventListener('click', function () {
//             this.parentNode.remove();
//         });
//     }
// }

// script.js
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `${taskInput} <button class="deleteBtn">Delete</button>`;
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = '';

        li.addEventListener('click', function () {
            this.classList.toggle('dark-theme');
        });

        li.getElementsByClassName('deleteBtn')[0].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}
