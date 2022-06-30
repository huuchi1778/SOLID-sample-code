var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.connect = function (userName, pass, table) {
        console.log('Connected to database:');
        console.log("Username: ".concat(userName));
        console.log("Password: ".concat(pass));
        console.log("Table: ".concat(table));
    };
    return Database;
}());
var Task = /** @class */ (function () {
    function Task(tasksList) {
        this.tasks = tasksList;
        this.totalCost = 0;
        this.db = new Database();
    }
    Task.prototype.addTask = function (newTasks) {
        this.tasks = this.tasks.concat(newTasks);
    };
    Task.prototype.getTotalCost = function () {
        this.totalCost = this.tasks.reduce(function (sum, currentEl) { return sum + currentEl.cost; }, 0);
        console.log("The total cost is: ".concat(this.totalCost));
    };
    Task.prototype.saveToDB = function () {
        this.db.connect('huuchi1778', '1234', 'tasks');
        this.tasks.forEach(function (task) {
            console.log("Task ".concat(task.taskName, " has been saved to DB"));
        });
    };
    return Task;
}());
var myTasks = [
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
var tasks = new Task(myTasks);
tasks.getTotalCost();
tasks.saveToDB();
