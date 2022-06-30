type TaskList = {
  taskName: string,
  cost: number
}

class Task {
  tasks: TaskList[];
  private db: string;
  private totalCost: number;

  constructor(tasksList: TaskList[]) {
    this.tasks = tasksList;
    this.db = 'Connected to DB';
    this.totalCost = 0;

  }

  addTask(newTasks: TaskList[]) {
    this.tasks = this.tasks.concat(newTasks);
  }

  getTotalCost() {
    this.totalCost = this.tasks.reduce((sum, currentEl) => sum + currentEl.cost, 0);
    console.log(`The total cost is: ${this.totalCost}`);
  }

  saveToDB() {
    console.log(this.db);
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