// Author Nguyen Thanh Hung
import React from 'react';
import { connect } from 'react-redux';
import { add, update } from '../actions/staffAdd';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Menu extends React.Component {
  onAdd = () => {
    this.props.Add();
  };
  onUpdate = () => {
    this.props.Update();
  };
  render() {
    return (
      <div style={{ float: 'right' }}>
        {this.props.isUpdate ? (
          <td class='menu2'>
            <Button variant='warning' size='lg'>
              {' '}
              <Link to='/edit' onClick={this.onUpdate} class='menu2'>
                Edit
              </Link>
            </Button>
          </td>
        ) : (
          ''
        )}

        <td class='menu2'>
          <Button variant='warning' size='lg'>
            <Link to='/add' onClick={this.onAdd} class='menu2'>
              Add
            </Link>
          </Button>
        </td>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUpdate: state.filterStaff.isUpdate
  };
};

const mapDispathToProps = dispatch => {
  return {
    Add: () => {
      dispatch(add());
    },
    Update: () => {
      dispatch(update());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Menu);
