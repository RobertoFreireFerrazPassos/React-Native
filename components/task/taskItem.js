import React from 'react';
import { View, Text } from 'react-native';

const TaskItem = (props) => {
    return <View>
        <Text>{props.item}</Text>
    </View>
}

export default TaskItem;