import React from 'react';
import { StyleSheet, View } from 'react-native';

import NewTask from './newTask';

const TaskContainer = () => {
    return (
        <View style={styles.container}>
            <NewTask>
            </NewTask>
        </View>
    )    
}

export default TaskContainer;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});