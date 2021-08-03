import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import TaskItem from './taskItem';
import { TaskService } from '../../services/tasks/taskService';

const TaskList = () => {
    const [taskList,setTaskList] = useState(TaskService.getTasks());

    useEffect(() => {
        TaskService.onChanges().subscribe(()=>{
            setTaskList(TaskService.getTasks());
        })
    },[]);

    return (
        <View>
            <FlatList
                keyExtractor={item => item}
                data={taskList}
                renderItem={ itemData => (
                    <TaskItem item={itemData.item}></TaskItem>
                )}
            >
            </FlatList>
            
        </View>
    )
}

export default TaskList;