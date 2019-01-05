import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Create First React App', important: true, id: 2 },
      { label: 'Take a walk', important: false, id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx+1)
        ]
      }
    })
  };

  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={id => this.deleteItem(id)}
        />
        <ItemAddForm
          onItemAdded = { this.addItem }
        />
      </div>
    );
  }
}
