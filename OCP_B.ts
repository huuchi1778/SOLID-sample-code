type Task = {
  name: string,
  complexity: string,
  cost: number
}

type TaskDetails = {
  name: string,
  complexity: string,
  cost: number,
  buffer: number,
  totalCost: number
}

class TaskManagement {
  private task: Task;
  private buffer: number;

  constructor(task: Task) {
    this.task = task;
    this.buffer = 0;
  }

  get taskDetails(): TaskDetails {
    this.estimateBuffer();

    return {
      name: this.task.name,
      complexity: this.task.complexity,
      cost: this.task.cost,
      buffer: this.buffer,
      totalCost: this.task.cost + this.buffer
    };
  }

  private estimateBuffer(): void {
    switch (this.task.complexity) {
      case 'easy':
        this.buffer = this.task.cost * 0.2;
        break;
      case 'moderate':
        this.buffer = this.task.cost * 0.4;
        break;
      case 'hard':
        this.buffer = this.task.cost * 0.6;
        break;
      default:
        this.buffer = this.task.cost * 0.4;
        break;
    }
  }
}

const aTask = {
  name: 'cooking',
  complexity: 'hard',
  cost: 1
};

const task = new TaskManagement(aTask);
console.log(task.taskDetails);