import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

class AddOption extends Component {
  state = {
    error: undefined
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.addOptionHandler(option);
    this.setState(() => ({ error: error }));
    return (e.target.option.value = '');
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <Form onSubmit={this.onSubmitHandler}>
          <Input type="text" name="option" />
          <Button content="Standard" basic>
            Add Option
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddOption;
