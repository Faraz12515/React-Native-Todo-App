import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Redux //
import {useSelector, useDispatch} from 'react-redux';
import {addTodos, removeTodos} from '../redux/actions/Actions';
///////////

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const {_todos} = state;

  const [text, setText] = useState('');

  // const [todos, setTodos] = useState([
  //   {id: 1, todo: 'Cake'},
  //   {id: 2, todo: 'Milk'},
  // ]);

  // const [todos, setTodos] = useState([]);

  // Add Todos in Existing Todos //
  // const add = () => {
  //   setTodos([...todos, {todo: text}]);
  // };

  // Update //
  const update = () => {
    // setTodos([todos && {todo: text}]);
    // let UPDATE = todos.filter((v, id) => {
    //   return id === v && [todos && {todo: text}];
    // });
    // setTodos(UPDATE);
  };
  console.log(text);

  // Remove Todos //
  // const remove = (i) => {
  //   let FILTER = todos.filter((v, id) => {
  //     return id !== i;
  //   });
  //   setTodos(FILTER);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Add to do"
          placeholderTextColor="#999"
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>
      <View style={{paddingTop: 20, marginBottom: '8%'}}>
        <TouchableOpacity
          onPress={() => dispatch(addTodos(text))}
          style={{...styles.Button, width: '80%'}}>
          <Text style={styles.ButtonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={update}
          style={{...styles.updateButton, width: '80%'}}>
          <Text style={styles.ButtonText}>Update</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            ...styles.todoListView,
            // marginBottom: todos.length - 1 ? '7%' : 0,
          }}>
          {_todos.map((v, i) => {
            return (
              <View key={i} style={{}}>
                <View
                  style={{
                    paddingHorizontal: '2%',
                    paddingVertical: '1%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setText(v.todo)}
                    style={{
                      ...styles.Button,
                      backgroundColor: '#222',
                      marginVertical: '2%',
                      marginLeft: 7,
                    }}>
                    <Text
                      style={{
                        ...styles.ButtonText,
                        color: 'white',
                      }}>
                      {v.todo}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons
                      // onPress={() => remove(i)}
                      onPress={() => dispatch(removeTodos(i))}
                      name="delete"
                      color="#333"
                      size={40}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  todoListView: {
    width: '93%',
    height: '100%',
    marginTop: '10%',
    backgroundColor: '#999',
    alignSelf: 'center',
    borderRadius: 5,
  },
  todoList: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  textInputView: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
  },
  textInput: {
    // marginVertical: 15,
    paddingVertical: 5,
    color: '#999',
    fontSize: 18,
    paddingTop: 3,
    borderBottomColor: '#999',
    borderBottomWidth: 1.3,
  },
  Button: {
    backgroundColor: 'dodgerblue',
    padding: 11,
    // marginTop: 30,
    marginVertical: '8%',

    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    // borderWidth: 2,
    // borderColor: '#333',
    borderRadius: 5,
  },
  updateButton: {
    backgroundColor: 'dodgerblue',
    padding: 11,

    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    // borderWidth: 2,
    // borderColor: '#333',
    borderRadius: 5,
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
