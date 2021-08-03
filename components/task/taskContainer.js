import React from 'react';
import { StyleSheet, View } from 'react-native';

import NewTask from './newTask';
import TaskList from './taskList';

const TaskContainer = () => {
    return (
        <View style={styles.container}>
            <NewTask>
            </NewTask>
            <TaskList>                
            </TaskList>
        </View>
    )    
}

export default TaskContainer;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});