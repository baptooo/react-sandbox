import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todolist = (state = {tasks: [], inputTaskName: ''}, action) => {
  switch(action.type) {
    case 'UPDATE_TASK_NAME':
      return { tasks: state.tasks, inputTaskName: action.inputTaskName };
    case 'ADD_TASK':
      if(state.inputTaskName === '') {
        throw('You cannot add a task without a name');
      }
      return { tasks: [...state.tasks, state.inputTaskName], inputTaskName: ''};
    case 'DELETE_TASK':
      return { tasks : [
        ...state.tasks.slice(0, action.index),
        ...state.tasks.slice(action.index + 1)
      ], inputTaskName: state.inputTaskName };
    default:
      return state;
  }
};

const TodoList = ({
  tasks, onAdd, onRemove, onUpdateTaskName, inputTaskName
}) => {
  let items = tasks.map((name, key) => {
    return <li key={key}>
      {name}
      <button data-key={key} onClick={onRemove}>remove</button>
    </li>
  });
  return (
    <div>
      <input type="text" value={inputTaskName} onChange={onUpdateTaskName}/>
      <button onClick={onAdd}>Add task</button>
      <ul>
        {items}
      </ul>
    </div>
  )
};

const store = createStore(todolist);
const render = () => {
  ReactDOM.render(
    <TodoList tasks={store.getState().tasks}
              inputTaskName={store.getState().inputTaskName}
              onAdd={() => store.dispatch({ type: 'ADD_TASK' })}
              onRemove={(evt) => store.dispatch({ type: 'DELETE_TASK', index: +evt.target.dataset.key })}
              onUpdateTaskName={(evt) => store.dispatch({ type: 'UPDATE_TASK_NAME', inputTaskName: evt.target.value })}
    />
    , document.getElementById('react-app'));
};

store.subscribe(render);
render();

