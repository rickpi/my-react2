import React, { Component } from 'react';
import {
  TextField,
  Grid,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    const { addItem } = this.props;
    this.addItem = addItem;
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  handleAdd() {
    const { value } = this.state;

    if (value === '') return;
    this.addItem(value);
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;

    return (
      <Grid container item md={4} sm={8} xs={10}>
        <Grid item xs={8}>
          <TextField
            id="add-task"
            label="Ajouter une tâche"
            color="primary"
            value={value}
            onChange={(event) => this.handleChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') this.handleAdd();
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Fab
            size="small"
            color="primary"
            onClick={this.handleAdd}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
