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
        <div class="mt-8 py-2 px-2 bg-white ml-16 mx-8 my-4 rounded text-2xl flex justify-between w-100">
            <p class="p-1">${taskValue}</p>
            <div>
                <input type="checkbox">
                <button class="delete-btn bg-green-300 hover:bg-red-500 rounded py-2 px-4ckco">Delete</button>
            </div>
        </div>
    `;

    let deleteBtn = taskWrapper.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskWrapper.remove();
    });
    taskcontainer.appendChild(taskWrapper);
}
