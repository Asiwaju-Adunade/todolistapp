// DOM
const enterTask = document.getElementById("enter-task");
const addTask = document.getElementById("add-task");
const taskcontainer = document.querySelector(".taskwrapper");

// Event listener
addTask.addEventListener("click", (e) => {
    if (enterTask.value !== "") {
        displayTask(enterTask.value);
        enterTask.value = "";
    }
});

// Function
function displayTask(taskValue) {
    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task-wrapper");
    taskWrapper.innerHTML = `
        <div class="my-5 p-2 bg-white mx-auto rounded text-2xl flex max-w-md justify-between items-center">
            <p>${taskValue}</p>
            <div>
                <input type="checkbox">
                <button class="delete-btn bg-green-300 hover:bg-red-500 rounded py-2 px-4"> Delete </button>
            </div>
        </div>
    `;

    let deleteBtn = taskWrapper.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskWrapper.remove();
    });
    taskcontainer.appendChild(taskWrapper);
}
