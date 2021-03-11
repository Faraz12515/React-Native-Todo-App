import {ADD_TODO, REMOVE_TODO} from './types.js';

export const addTodos = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const removeTodos = (i) => {
  return {
    type: REMOVE_TODO,
    payload: i,
  };
};
