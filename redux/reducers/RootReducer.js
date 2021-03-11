import {ADD_TODO, REMOVE_TODO} from '../actions/types';

const initialState = {
  _todos: [
    {id: 1, todo: 'Cake'},
    {id: 2, todo: 'Milk'},
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        _todos: [...state._todos, {todo: action.payload, id: action.id}],
      };

    case REMOVE_TODO:
      const FILTER = state._todos.filter((v, id) => id !== action.payload);
      return {
        ...state,
        _todos: FILTER,
      };

    default:
      return state;
  }
}
