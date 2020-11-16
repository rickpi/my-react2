import React, { Component } from 'react';
import {
  FormControlLabel,
  Grid,
  Checkbox,
  Fab,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends Component {
  constructor(props) {
    super(props);

    const { checkItem, deleteItem } = this.props;
    this.checkItem = checkItem;
    this.deleteItem = deleteItem;
  }

  render() {
    const { item } = this.props;
    const { label, checked, id } = item;
    let styleChecked = {};

    if (checked) {
      styleChecked = {
        textDecoration: 'line-through',
      };
    }

    return (
      <Grid container>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={() => this.checkItem(id)} color="primary" />}
          label={label}
          style={styleChecked}
        />
        <Fab
          size="small"
          color="secondary"
          onClick={() => this.deleteItem(id)}
        >
          <DeleteIcon />
        </Fab>
      </Grid>
    );
  }
}

export default Item;
