let todos = [];

// Add a new todo with optional due date, default status is "Pending"
function addTodo(task, dueDate = "") {
    todos.push({ task, status: "Pending", dueDate, editing: false });
    console.log(`Added: "${task}"${dueDate ? " (Due: " + dueDate + ")" : ""}`);
}

// Remove a todo by index
function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
        const removed = todos.splice(index, 1);
        console.log(`Removed: "${removed[0].task}"`);
    } else {
        console.log("Invalid index.");
    }
}

// List all todos
function listTodos() {
    if (todos.length === 0) {
        console.log("No todos yet.");
        return;
    }
    todos.forEach((todo, i) => {
        const status = todo.status === "Completed" ? "[x]" : "[ ]";
        const due = todo.dueDate ? ` (Due: ${todo.dueDate})` : "";
        console.log(`${i}: ${status} ${todo.task}${due} [${todo.status}]`);
    });
}

// Mark a todo as completed (change status)
function completeTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos[index].status = "Completed";
        console.log(`Completed: "${todos[index].task}"`);
    } else {
        console.log("Invalid index.");
    }
}