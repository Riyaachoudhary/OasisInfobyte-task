
let tasks = []
let filter = "all"

function addTask(){
    let text = document.getElementById("taskInput").value
    let date = document.getElementById("taskDate").value
    let time = document.getElementById("taskTime").value

    if(text==="") return

    // Agar user time select nahi kare to current time set karo
    if(!time){
        let now = new Date()
        let hrs = String(now.getHours()).padStart(2,'0')
        let mins = String(now.getMinutes()).padStart(2,'0')
        time = `${hrs}:${mins}`
    }

    tasks.push({
        text: text,
        date: date,
        time: time,
        completed: false
    })

    document.getElementById("taskInput").value=""
    document.getElementById("taskDate").value=""
    document.getElementById("taskTime").value=""

    displayTasks()
}

function displayTasks(){
    let list = document.getElementById("taskList")
    list.innerHTML=""

    tasks.forEach((task,index)=>{
        if(filter==="active" && task.completed) return
        if(filter==="completed" && !task.completed) return

        let li = document.createElement("li")
        if(task.completed){
            li.classList.add("completed")
        }

        li.innerHTML = `
<span>
    ${task.text}<br>
    <small>🗓️ ${task.date ? task.date : "No date"} &nbsp;&nbsp; ⏰ ${task.time}</small>
</span>
<div class="actions">
    <button class="complete" onclick="toggleTask(${index})">✔</button>
    <button class="edit" onclick="editTask(${index})">✏</button>
    <button class="delete" onclick="deleteTask(${index})">🗑</button>
</div>
`
      list.appendChild(li) 
    })
}

function toggleTask(i){
    tasks[i].completed = !tasks[i].completed
    displayTasks()
}

function deleteTask(i){
    // Confirm dialog
    let confirmDelete = confirm(`Are you sure you want to delete this task?\n"${tasks[i].text}"`)
    if(confirmDelete){
        tasks.splice(i,1)  // delete task
        displayTasks()      // refresh list
    }
}


function editTask(i){
    let newTask = prompt("Edit Task",tasks[i].text)
    if(newTask){
        tasks[i].text = newTask
        displayTasks()
    }
}

function filterTasks(type,e){
    filter = type
    let status = document.getElementById("statusText")
    let buttons = document.querySelectorAll(".filters button")
    buttons.forEach(btn => btn.classList.remove("active"))
    e.target.classList.add("active")

    if(type==="all") status.innerText="Showing: All Tasks"
    if(type==="active") status.innerText="Showing: Pending Tasks"
    if(type==="completed") status.innerText="Showing: Completed Tasks"

    displayTasks()
}

function toggleTheme(){
    document.body.classList.toggle("dark")
}


