let todos = [];

// Add a new todo with optional due date
function addTodo(task, dueDate = "") {
    todos.push({ task, completed: false, dueDate, editing: false });
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
        const status = todo.completed ? "[x]" : "[ ]";
        const due = todo.dueDate ? ` (Due: ${todo.dueDate})` : "";
        console.log(`${i}: ${status} ${todo.task}${due}`);
    });
}

// Mark a todo as completed
function completeTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos[index].completed = true;
        console.log(`Completed: "${todos[index].task}"`);
    } else {
        console.log("Invalid index.");
    }
}

