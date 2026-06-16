//This is a simple task tracker that allows you to add, update, delete, and list tasks. You can also mark tasks as in-progress, done, or not-done.
const args = process.argv.slice(2);

const fs = require('fs');

//this is to add a task to the task.json file. It will create a new task with an id, task, and status of "todo".
 if(args[0] === 'add') {
   const task = fs.readFileSync('task.json');
   const taskObj = JSON.parse(task);
   taskObj.push({ id: taskObj.length + 1, task: args[1], status: "todo" });
   fs.writeFileSync('task.json', JSON.stringify(taskObj));
 };

 //this is to update a task in the task.json file. It will find the task with the given id and update the task with the new task.
 if(args[0] === 'update') {
    const task = fs.readFileSync('task.json');
    const taskObj = JSON.parse(task);
    const finding = taskObj.find(item => item.id === parseInt(args[1]));
    if(finding) {
        finding.task = args[2];
        fs.writeFileSync('task.json', JSON.stringify(taskObj));
    }
 };

 //this is to delete a task from the task.json file. It will find the task with the given id and delete it from the array.
 if(args[0] === 'delete') {
    const task = fs.readFileSync('task.json');
    const taskObj = JSON.parse(task);
    const deleted = taskObj.findIndex(item => item.id === parseInt(args[1]));
    if(deleted > -1){
        taskObj.splice(deleted, 1);
        fs.writeFileSync('task.json', JSON.stringify(taskObj));
    }
 };

 //this is to mark a task as in-progress, done, or not-done. It will find the task with the given id and update the status accordingly.
    if(args[0] === 'mark-in-progress') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const update = taskObj.find(item => item.id === parseInt(args[1]));
        if(update) {
            update.status = "in-progress";
            fs.writeFileSync('task.json', JSON.stringify(taskObj));
        };
    };

    //this is to mark a task as done. It will find the task with the given id and update the status to "done".
    if(args[0] === 'mark-done') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const update = taskObj.find(item => item.id === parseInt(args[1]));
        if(update) {
            update.status = "done";
            fs.writeFileSync('task.json', JSON.stringify(taskObj));
        };
    };

    //this is to mark a task as not-done. It will find the task with the given id and update the status to "not-done".
    if(args[0] === 'mark-not-done') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const update = taskObj.find(item => item.id === parseInt(args[1]));
        if(update) {
            update.status = "not-done";
            fs.writeFileSync('task.json', JSON.stringify(taskObj));
        }
    };

    //this is to list all the tasks in the task.json file. It will read the file and parse the JSON into an array of objects and log it to the console.
    if(args[0] === 'list') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        console.log(taskObj);
    };

    //this is to list all the tasks that are marked as done in the task.json file. It will read the file and parse the JSON into an array of objects and filter it to only include tasks that have a status of "done" and log it to the console.
    if(args[0] === 'list-done') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const doneTasks = taskObj.filter(item => item.status === "done");
        console.log(doneTasks);
    };

    //this is to list all the tasks that are not marked as done in the task.json file. It will read the file and parse the JSON into an array of objects and filter it to only include tasks that do not have a status of "done" and log it to the console.
    if(args[0] === 'list-not-done') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const notDoneTasks = taskObj.filter(item => item.status !== "done");
        console.log(notDoneTasks);
    };

    //this is to list all the tasks that are marked as in-progress in the task.json file. It will read the file and parse the JSON into an array of objects and filter it to only include tasks that have a status of "in-progress" and log it to the console.
    if (args[0] === 'list-in-progress') {
        const task = fs.readFileSync('task.json');
        const taskObj = JSON.parse(task);
        const inProgressTasks = taskObj.filter(item => item.status === "in-progress");
        console.log(inProgressTasks);
    };
