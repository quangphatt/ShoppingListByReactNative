import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
    const [items, setItems]=useState([
        {id: uuid.v4(), text: 'Milk'},
        {id: uuid.v4(), text: 'Egg'},
        {id: uuid.v4(), text: 'Bread'},
        {id: uuid.v4(), text: 'Juice'},
    ]);
    
    const deleteItem=(id)=>{
        setItems((prevItems)=>prevItems.filter((item) => item.id !== id));
    };

    const addItem=(txt)=>{
        if(!txt){
            Alert.alert(
                'No item entered',
                'Please enter an item when adding to your shopping list',
                [{
                    text: 'OK',
                    style: 'cancel',
                },
                ],
                {cancelable: true},
            )
        }
        else {
            setItems(prevItems=>[{id: uuid.v4(), text: txt}, ...prevItems]);
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <AddItem addItem={addItem}/>
            <FlatList 
                data={items}
                renderItem={({item})=>(
                    <ListItem 
                        item={item}
                        deleteItem={deleteItem}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        // paddingTop: 60   // iOS
    },
});

export default App;

