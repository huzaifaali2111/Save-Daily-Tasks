let save = document.getElementById("save_btn")
let tasks = document.querySelector('.task_keeper')
let user_note = document.getElementById('user_note')
let hide_btn = document.getElementById("pending_btn")
let completed_btn = document.getElementById("completed_btn")
let all_btn = document.getElementById("all_btn")


const saving_task = () => {
    let fetched_task = user_note.value.trim();
    if (!fetched_task) {
        alert("Write Something to Add")
        return;
    }
    let js_html = document.createElement("div");
    js_html.className = "dynamic_content "
    js_html.innerHTML = `
            <i class="fa-regular fa-circle circle"></i>
            <p id="content_handler">${fetched_task}</p>
            <i class="fa-solid fa-trash-can trash"></i> `;

    tasks.appendChild(js_html);
    user_note.value = '';
    user_note.focus();
};
save.addEventListener("click", saving_task)
user_note.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        saving_task();
    }
});
tasks.addEventListener("click", (event) => {
    if (event.target.classList.contains('trash')) {
        event.target.parentElement.remove();
    }
    if (event.target.classList.contains("circle")) {
        event.target.classList.toggle("fa-circle");
        event.target.classList.toggle("fa-circle-check");
        event.target.nextElementSibling.classList.toggle("completed");
        event.target.parentElement.classList.toggle("abc")
    }
});
const show = () => {
    let allTasks = document.querySelectorAll(".dynamic_content")
    if (allTasks.length == 0) {
        alert("Add Task First")
    }
    allTasks.forEach(element => {
        if (element.classList.contains("abc")) {
            element.style.display = "flex";
        }
        else {
            element.style.display = "none";
        }
    });
}
const hide = () => {
    let allTasks = document.querySelectorAll(".dynamic_content")
    if (allTasks.length == 0) {
        alert("Add Task First")
    }
    allTasks.forEach(element => {
        if (element.classList.contains("abc")) {
            element.style.display = "none";
        }
        else {
            element.style.display = "flex";
        }
    });
}
completed_btn.addEventListener("click", () => {
    completed_btn.classList.add("active")
    hide_btn.classList.remove("active");
    all_btn.classList.remove("active");
    show();
});
hide_btn.addEventListener("click", () => {
    hide_btn.classList.add("active");
    completed_btn.classList.remove("active")
    all_btn.classList.remove("active");
    hide();
});
all_btn.addEventListener("click", () => {
    all_btn.classList.add("active");
    hide_btn.classList.remove("active");
    completed_btn.classList.remove("active");
    let allTasks = document.querySelectorAll(".dynamic_content")
    if (allTasks.length == 0) {
        alert("No task Here")
    }
    console.log(allTasks);
    allTasks.forEach(element => {
        element.style.display = "flex";
    });
})
