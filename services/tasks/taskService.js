import { Subject } from 'rxjs';

const subject = new Subject();

let taskList = [];

const addTask = (taskTitle) => {
    const task = {
        title : taskTitle,
        id : Math.random().toString().replace("0.","")
    }
    taskList.push(task);
}

export const TaskService = {
    addTask : (taskTitle) => { addTask(taskTitle); subject.next(); },
    onChanges: () => subject.asObservable(),
    getTasks : () => [...taskList]
}