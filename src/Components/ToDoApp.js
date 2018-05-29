import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';
import './ToDoApp.css';
import { Container } from 'semantic-ui-react';

class ToDoApp extends Component {
  state = {
    options: [],
    isOpen: false
  };

  actionHandler = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const showOption = this.state.options[randomNum];
    this.setState({ isOpen: showOption });
  };

  removeAllHandler = () => {
    this.setState(() => ({ options: [] }));
  };

  addOptionHandler = option => {
    if (!option) {
      return 'Please Enter a Valid to Do Item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'To Do Item Already Exist';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  removeItemHandler = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(
        optionToRemove => optionToRemove !== option
      )
    }));
  };

  closeModalHandler = () => {
    this.setState(() => ({ isOpen: false }));
  };

  render() {
    return (
      <div className="main">
        <Container>
          <Header />
          <Action
            className="action"
            pickToDoItem={this.actionHandler}
            hideOrShow={this.state.options.length > 0}
          />
          <Options
            removeAll={this.removeAllHandler}
            options={this.state.options}
            removeItemHandler={this.removeItemHandler}
          />
          <AddOption addOptionHandler={this.addOptionHandler} />
          <OptionModal
            isOpen={this.state.isOpen}
            close={this.closeModalHandler}
          />
        </Container>
      </div>
    );
  }
}

export default ToDoApp;
