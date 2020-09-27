import React, { Component } from 'react';
import './app.css';
import Foods from './components/foods';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    foods: [
      { id: 1, name: '국밥', count: 0 },
      { id: 2, name: '치킨', count: 0 },
      { id: 3, name: '곱창', count: 0 },
    ],
  };

  handleIncrement = food => {
    const foods = this.state.foods.map(item => {
      if (item.id === food.id) {
        return { ...food, count: food.count + 1 };
      }
      return item;
    });
    this.setState({ foods });
  };

  handleDecrement = food => {
    const foods = this.state.foods.map(item => {
      if (item.id === food.id) {
        const count = food.count - 1;
        return { ...food, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ foods });
  };

  handleDelete = food => {
    const foods = this.state.foods.filter(item => item.id !== food.id);
    this.setState({ foods });
  };

  handleAdd = name => {
    const foods = [...this.state.foods, { id: Date.now(), name, count: 0 }];
    this.setState({ foods });
  };

  handleReset = () => {
    const foods = this.state.foods.map(food => {
      if (food.count !== 0) {
        return { ...food, count: 0 };
      }
      return food;
    });
    this.setState({ foods });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.foods.filter(item => item.count > 0).length}
        />
        <Foods
          foods={this.state.foods}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
