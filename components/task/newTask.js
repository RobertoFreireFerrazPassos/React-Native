import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, TouchableHighlight } from 'react-native';

import { TaskService } from '../../services/tasks/taskService';

const NewTask = () => {
    const placeholder="Add a new Task";
    const [taskItem,setTaskItem] = useState('');

    const taskInputHandler = enteredTaskText => {
        setTaskItem(enteredTaskText);
    }

    const addTask = () => {
        TaskService.addTask(taskItem);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                onChangeText={taskInputHandler}
                value={taskItem}
            ></TextInput>
            <TouchableHighlight>
                <View>
                    <Button 
                        title="Add" 
                        color="green"
                        onPress={addTask}
                    />
                </View>
            </TouchableHighlight>
        </View>  
    );
}

export default NewTask;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
});