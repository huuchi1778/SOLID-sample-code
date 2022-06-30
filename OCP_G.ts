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

interface TaskManagement {
  get estimateBuffer(): number;
}

class EasyTaskManagement implements TaskManagement {
  private task: Task;

  constructor(task: Task) {
    // super();
    this.task = task;
  }

  get estimateBuffer(): number {
    return this.task.cost * 0.2;
  }
}

class ModerateTaskManagement implements TaskManagement {
  private task: Task;

  constructor(task: Task) {
    // super();
    this.task = task;
  }

  get estimateBuffer(): number {
    return this.task.cost * 0.4;
  }
}

class HardTaskManagement implements TaskManagement {
  private task: Task;

  constructor(task: Task) {
    // super();
    this.task = task;
  }

  get estimateBuffer(): number {
    return this.task.cost * 0.6;
  }
}

class EstimateBuffer {
  private taskManagement: TaskManagement;

  constructor(taskManagement: TaskManagement) {
    this.taskManagement = taskManagement;
  }

  get estimateBuffer(): number {
    return this.taskManagement.estimateBuffer;
  }
}

const aTask = {
  name: 'cooking',
  complexity: 'hard',
  cost: 3
};

const task = new EstimateBuffer(new HardTaskManagement(aTask));
// const task = new HardTaskManagement(aTask);
console.log(task.estimateBuffer);