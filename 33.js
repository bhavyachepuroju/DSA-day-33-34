class Node {
    constructor(task) {
        this.task = task;
        this.next = null;
    }
}

class TaskManager {
    constructor() {
        this.head = null;
    }

    addTaskAtEnd(task) {
        let newNode = new Node(task);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    addTaskAtBeginning(task) {
        let newNode = new Node(task);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteTaskByName(task) {
        if (this.head === null) return;

        if (this.head.task === task) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.task !== task) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    deleteTaskByPosition(position) {
        if (this.head === null || position <= 0) return;

        if (position === 1) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let count = 1;

        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        if (current !== null && current.next !== null) {
            current.next = current.next.next;
        }
    }

    showTasks() {
        let current = this.head;
        let tasks = [];
        while (current !== null) {
            tasks.push(current.task);
            current = current.next;
        }
        console.log(tasks.join(" → "));
    }
}

let taskManager = new TaskManager();

taskManager.addTaskAtEnd("Finish Homework");
taskManager.addTaskAtEnd("Buy Groceries");
taskManager.addTaskAtBeginning("Morning Workout");
taskManager.showTasks();

taskManager.deleteTaskByName("Buy Groceries");
taskManager.showTasks();

taskManager.deleteTaskByPosition(2);
taskManager.showTasks();