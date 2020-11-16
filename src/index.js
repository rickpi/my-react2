import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Container,
} from '@material-ui/core';

import initialState from './initial-state';
import Item from './components/item';
import Form from './components/form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      lastId: 0,
    };
    this.checkItem = this.checkItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    const lastId = initialState.length;

    this.setState({
      data: initialState,
      lastId,
    });
  }

  checkItem(id) {
    const { data } = this.state;

    data.map((item) => {
      const updatedItem = item;
      if (item.id === id) updatedItem.checked = !updatedItem.checked;
      return updatedItem;
    });
    this.setState({
      data,
    });
  }

  addItem(label) {
    const { data, lastId } = this.state;
    const newId = lastId + 1;

    data.push({
      label,
      checked: false,
      id: newId,
    });
    this.setState({
      data,
      lastId: newId,
    });
  }

  deleteItem(id) {
    const { data } = this.state;
    const updatedData = data.filter((item) => item.id !== id);

    this.setState({
      data: updatedData,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Container maxWidth="md">
        <Grid container>
          <Form addItem={this.addItem} />
          {data.map((item) => (
            <Item
              item={item}
              key={item.id}
              checkItem={this.checkItem}
              deleteItem={this.deleteItem}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
