import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

    // State
    const [items, setItems]=useState([
        {id: uuid.v4(), text: 'Milk'},
        {id: uuid.v4(), text: 'Egg'},
        {id: uuid.v4(), text: 'Bread'},
        {id: uuid.v4(), text: 'Juice'},
    ]);

    const [editStatus, editStatusChange] = useState(false);

    const [editItemDetail, editItemDetailChange] = useState({
        id: null,
        text: null,
    });

    const [checkedItems, checkedItemChange] = useState([]);
    
    // Delete Item
    const deleteItem=(id)=>{
        setItems((prevItems)=>prevItems.filter((item) => item.id !== id));
    };

    // Add Item
    const addItem=(txt)=>{
        if(!txt){
            Alert.alert(
                'No item entered',
                'Please enter an item when adding to your shopping list',
                [{
                    text: 'OK',
                    style: 'cancel',
                }],
                {cancelable: true},
            )
        }
        else {
            setItems(prevItems=>[{id: uuid.v4(), text: txt}, ...prevItems]);
        }
    };

    // Edit Item
    const saveEditItem=(id,text)=>{
        setItems(prevItems => {
            return prevItems.map(item =>
                item.id === editItemDetail.id ? {id, text: editItemDetail.text} : item,
            );
        });
        
        editStatusChange(!editStatus);
    };

    const handleEditChange=(text)=>{
        editItemDetailChange({id: editItemDetail.id, text});
    };

    const editItem=(id,text)=>{
        editItemDetailChange({
            id,
            text,
        });
        return editStatusChange(!editStatus);
    };

    const itemChecked = (id, text) => {
        const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
        isChecked.length
            ? // remove item from checked items state (uncheck)
                checkedItemChange(prevItems => {
                return [...prevItems.filter(item => item.id !== id)];
                })
            : // Add item to checked items state
                checkedItemChange(prevItems => {
                return [...prevItems.filter(item => item.id !== id), {id, text}];
                });
    };

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
                        editItem={editItem}
                        isEditing={editStatus}
                        editItemDetail={editItemDetail}
                        saveEditItem={saveEditItem}
                        handleEditChange={handleEditChange}
                        itemChecked={itemChecked}
                        checkedItems={checkedItems}
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

