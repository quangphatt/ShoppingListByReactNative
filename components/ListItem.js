import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
	const checked = props.checkedItems.filter(
		checkedItem => checkedItem.id === props.item.id,
	);

	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				{props.isEditing && props.editItemDetail.id === props.item.id ? (
					<TextInput
						placeholder="Edit Item..."
						style={styles.editItemInput}
						onChangeText={props.handleEditChange}
					/>
				) : (
					<Text
						onPress={() => props.itemChecked(props.item.id, props.item.text)}
						style={
							checked.length ? styles.checkedItemText : styles.listItemText
						}>
						{props.item.text}
					</Text>
				)}

				<View style={styles.iconView}>
					{props.isEditing && props.editItemDetail.id === props.item.id ? (
						<Icon
							name="save"
							size={20}
							color="green"
							onPress={() => props.saveEditItem(props.item.id, props.item.text)}
						/>
					) : (
						!checked.length && (
							<Icon
								name="pencil"
								size={20}
								color="blue"
								onPress={() => props.editItem(props.item.id, props.item.text)}
							/>
						)
					)}
					<Icon 
						name="remove" 
						size={20} 
						color="firebrick" 
						onPress={()=>props.deleteItem(props.item.id)}
					/> 
				</View>
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
