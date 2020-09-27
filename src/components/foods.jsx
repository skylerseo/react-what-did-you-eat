import React, { Component } from 'react';
import Food from './food';
import FoodAddForm from './foodAddForm';

class Foods extends Component {
  render() {
    return (
      <>
        <div className="foods">
          <FoodAddForm onAdd={this.props.onAdd} />
          <ul>
            {this.props.foods.map(food => (
                <Food 
                  key={food.id} 
                  food={food} 
                  onIncrement={this.props.onIncrement} 
                  onDecrement={this.props.onDecrement} 
                  onDelete={this.props.onDelete}
                />
              ))}
          </ul>
          <button className="foods-reset" onClick={this.props.onReset}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Foods;