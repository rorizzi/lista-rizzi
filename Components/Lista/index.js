import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { colors } from '../../Styles/Colors'

/**
 * @param handleModal 
 * @param todoList 
 */

const Lista = ({handleModal, todoList}) => {

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item} />
    
    return (
        <View style={styles.itemList}>
            {todoList.length !== 0 && (
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
                />
            )}

            {todoList.length === 0 && <Text>No hay todos cargados</Text>}

        </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.brown,
        width: '95%',
        padding: 20,
        flex: 0.8,
    },
})