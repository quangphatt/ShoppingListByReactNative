import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{props.item.text}</Text>
				<Icon 
					name="remove" 
					size={20} 
					color="firebrick" 
					onPress={()=>props.deleteItem(props.item.id)}
				/> 
			</View>
		</TouchableOpacity>
	);
};

const styles=StyleSheet.create({
	listItem: {
		padding: 15,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	listItemView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemText: {
		fontSize: 18,
	},
	checkedItemText: {
		fontSize: 18,
		textDecorationLine: 'line-through',
		color: 'green',
	},
	iconView: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: 70,
	},
	editItemInput: {
		padding: 0,
		fontSize: 18,
	},
});

export default ListItem;
