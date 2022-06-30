type TaskList = {
  taskName: string,
  cost: number
}

class Database {
  connect(userName: string, pass: string, table: string) {
    console.log('Connected to database:');
    console.log(`Username: ${userName}`);
    console.log(`Password: ${pass}`);
    console.log(`Table: ${table}`);
  }
}

class TaskRepository {
  db: Database;
  tasks: TaskList[];

  constructor(taskList: TaskList[]) {
    this.db = new Database();
    this.tasks = taskList;
  }

  saveToDB() {
    this.db.connect('huuchi1778', '1234', 'tasks');
    this.tasks.forEach(task => {
      console.log(`Task ${task.taskName} has been saved to DB`);
    });
  }
}

class Task {
  private tasks: TaskList[];
  private totalCost: number;

  constructor(tasksList: TaskList[]) {
    this.tasks = tasksList;
    this.totalCost = 0;
  }

  addTask(newTasks: TaskList[]) {
    this.tasks = this.tasks.concat(newTasks);
  }

  getTotalCost() {
    this.totalCost = this.tasks.reduce((sum, currentEl) => sum + currentEl.cost, 0);
    console.log(`The total cost is: ${this.totalCost}`);
  }

  get taskList() {
    return this.tasks;
  }
}


const myTasks: TaskList[] = [
  {
    taskName: 'Homework',
    cost: 5
  },
  {
    taskName: 'Grocery',
    cost: 1
  },
  {
    taskName: 'Cleaning',
    cost: 0.5
  }
];

const tasks = new Task(myTasks);
console.log(tasks.taskList);
tasks.addTask([{
  taskName: 'Sleeping',
  cost: 7
}]);
console.log(tasks.taskList);

const taskRepo = new TaskRepository(tasks.taskList);
taskRepo.saveToDB();

