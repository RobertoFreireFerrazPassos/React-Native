import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import TaskItem from './taskItem';
import { TaskService } from '../../services/tasks/taskService';

const TaskList = () => {
    const [taskList,setTaskList] = useState(TaskService.getTasks());

    useEffect(() => {
        TaskService.onChanges().subscribe(()=>{
            setTaskList(TaskService.getTasks());
        });
    },[]);

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={item => item.id}
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

const styles = StyleSheet.create({
    list: {
      margin: 20
    }
  });