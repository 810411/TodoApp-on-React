import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form className="item-add-form input-group mb-3"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="Describe new task"
               value={this.state.label}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary">
            Add task
          </button>
        </div>
      </form>
    )
  }
};
