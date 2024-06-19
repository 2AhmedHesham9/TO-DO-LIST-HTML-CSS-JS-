const inputBox = document.getElementById('input-box');
const ListContainer = document.getElementById('list-container');

// ListContainer.remove();
function addTask() {
    if (inputBox.value === '' || !isNaN(inputBox.value)) {
        alert('You must Write a task!')
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        // let editBtn = document.createElement('button');
        // editBtn.innerHTML = "Edit";
        // li.appendChild(editBtn);
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

ListContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
    // else if (e.target.tagName === 'BUTTON') {
    //     let updateinput = document.createElement('input');
    //     updateinput.value = e.target.parentElement.innerHTML.split('<')[0];


    //     saveData();
    // }

    ;
}, false
)
function saveData() {
    localStorage.setItem("Tasks", ListContainer.innerHTML)
}
function showTask() {
    ListContainer.innerHTML = localStorage.getItem("Tasks");

}
showTask();