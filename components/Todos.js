import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function Todos({ todos, add, remove }) {
    const [task, setTask] = useState("")


    const save = () => {
        add(task)
        setTask("")
    }

    return (
        <>
            <View style={styles.valinta}>
                <TextInput placeholder="Add new..." value={task} onChangeText={(text) => setTask(text)} />
                <Button title="Save" onPress={save} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text style={styles.item} onPress={() => remove(index)}>
                        {item.text}
                    </Text>
                )}
                
            />
        </>
    )
}

const styles = StyleSheet.create({
    valinta: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    item: {
        padding: 16
    }
})