import React from 'react';
import { TextInput, View, StyleSheet, Button, TouchableHighlight } from 'react-native';

const NewTask = () => {
    const placeholder="Add a new Task";

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
            ></TextInput>
            <TouchableHighlight>
                <View>
                    <Button title="Add" color="green"/>
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