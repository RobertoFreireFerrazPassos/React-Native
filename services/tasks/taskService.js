import { Subject } from 'rxjs';

const subject = new Subject();

let taskList = [];

export const TaskService = {
    addTask : (task) => { taskList.push(task); subject.next(); },
    onChanges: () => subject.asObservable(),
    getTasks : () => [...taskList]
}