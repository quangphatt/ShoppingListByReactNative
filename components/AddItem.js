import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (props) => {
    const [text, setText]=useState('');
    const handleChangeText=(txt)=>setText(txt);

    return (
        <View>
            <TextInput 
                placeholder="Add item..." 
                style={styles.input} 
                value={text}
                onChangeText={handleChangeText}
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{
                    props.addItem(text);
                    setText('');
                }}
            >
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;