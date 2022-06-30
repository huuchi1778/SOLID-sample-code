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

  constructor(task: Task) {
    this.task = task;
  }

  // get taskDetails(): TaskDetails {
  //   this.estimateBuffer();

  //   return {
  //     name: this.task.name,
  //     complexity: this.task.complexity,
  //     cost: this.task.cost,
  //     buffer: this.buffer,
  //     totalCost: this.task.cost + this.buffer
  //   };
  // }

  get estimateBuffer(): number {
    switch (this.task.complexity) {
      case 'easy':
        return this.task.cost * 0.2;
      case 'moderate':
        return this.task.cost * 0.4;
      case 'hard':
        return this.task.cost * 0.6;
      default:
        return this.task.cost * 0.4;
    }
  }
}

const aTask = {
  name: 'cooking',
  complexity: 'hard',
  cost: 1
};

const task = new TaskManagement(aTask);
console.log(task.estimateBuffer);