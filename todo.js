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
 // Only JavaScript here!
function exportTodos(type) {
    let dataStr, fileName, mimeType;
    if (type === 'json') {
        dataStr = JSON.stringify(todos, null, 2);
        fileName = 'todos.json';
        mimeType = 'application/json';
    } else {
        dataStr = todos.map(todo =>
            `[${todo.status}] ${todo.task}${todo.dueDate ? ' (Due: ' + todo.dueDate + ')' : ''}`
        ).join('\n');
        fileName = 'todos.txt';
        mimeType = 'text/plain';
    }
    const blob = new Blob([dataStr], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}