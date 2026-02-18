
const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.innerHTML = `
            <span onclick="toggleTask(text)">${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
});
function deleteTask(btn) {
    btn.parentElement.remove();
}
function toggleTask(task) {
    task.style.textDecoration =
        task.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}