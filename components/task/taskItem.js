import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = (props) => {
    return <View style={styles.item}>
        <Text>{props.item.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  });

export default TaskItem;