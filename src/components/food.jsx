import React, { PureComponent } from 'react';

class Food extends PureComponent {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.food);
  }
  handleDecrement = () => {
    this.props.onDecrement(this.props.food);
  }
  handleDelete = () => {
    this.props.onDelete(this.props.food);
  }

  render() {
    const {name, count} = this.props.food;
    return (
      <li className="food">
        <span className="food-name">{name}</span>
        <div className="food-btns">
          <span className="food-count">{count}</span>
          <button className="food-button food-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="food-button food-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="food-button food-delete" onClick={this.handleDelete}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Food;