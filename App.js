import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './components/Todos';
import {useReducer, useState} from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'lisää':
      return [...state, { text: action.text, completed: false }];
    case 'poista':
      return state.filter((todo, index) => index !== action.index);
    default:
      throw new Error();
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState("")

  const add = (todo) => {
    dispatch({ type: 'lisää', text: todo });
  }

  const remove = (index) => {
    dispatch( { type: 'poista', index })
  }

  return (
    <View style={styles.container}>
      <Todos todos = {todos} add = {add} remove = {remove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 64,
    width: "100%"
  },
});
