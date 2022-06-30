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

class Task {
  private tasks: TaskList[];
  private db: Database;
  private totalCost: number;

  constructor(tasksList: TaskList[]) {
    this.tasks = tasksList;
    this.totalCost = 0;
    this.db = new Database();
  }

  addTask(newTasks: TaskList[]) {
    this.tasks = this.tasks.concat(newTasks);
  }

  getTotalCost() {
    this.totalCost = this.tasks.reduce((sum, currentEl) => sum + currentEl.cost, 0);
    console.log(`The total cost is: ${this.totalCost}`);
  }

  saveToDB() {
    this.db.connect('huuchi1778', '1234', 'tasks');
    this.tasks.forEach(task => {
      console.log(`Task ${task.taskName} has been saved to DB`);
    });
  }
}


const myTasks: TaskList[] = [
  {
    taskName: 'homework',
    cost: 5
  },
  {
    taskName: 'grocery',
    cost: 1
  },
  {
    taskName: 'cleaning',
    cost: 0.5
  }
];

const tasks = new Task(myTasks);
tasks.getTotalCost();
tasks.saveToDB();