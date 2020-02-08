// Author Nguyen Thanh Hung
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkOut, comeBack } from '../actions/login';
import { toBack } from '../actions/staffFilter';

class Header extends React.Component {
  onCheckout = () => {
    this.props.logout();
  };

  onComeBack = () => {
    this.props.UpdateBack();
  };

  render() {
    const Style = {
      width: '94%',
      fontSize: '80px',
      textAlign: 'center',
      textDecoration: 'underline'
    };
    const { isLogin } = this.props;
    return (
      <div className='container1'>
        <table>
          <tr>
            {isLogin ? (
              <td>
                <Link
                  to={this.props.isAddStaff ? '/filterstaff' : '/staffinfo'}
                  onClick={this.onComeBack}
                >
                  <i
                    class='fas fa-angle-double-left'
                    style={{ fontSize: '50px' }}
                  ></i>
                </Link>
              </td>
            ) : (
              <td>
                <i class='fas fa-home' style={{ fontSize: '50px' }}></i>
              </td>
            )}
            <td style={Style}>Sutrix HRM</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  <i className='fas fa-bars'></i>
                </Dropdown.Toggle>
                {isLogin ? (
                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>
                      Welcome Admin
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to='/' onClick={this.onCheckout}>
                        Logout
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>Dashboard</Dropdown.Item>
                    <Dropdown.Item>
                      <Link to='/filterstaff'>Staff</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  ''
                )}
              </Dropdown>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin,
    isAddStaff: state.addStaff.isAddStaff,
    isUpdate: state.filterStaff.isUpdate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(checkOut());
    },
    ComeBack: () => {
      dispatch(comeBack());
    },
    UpdateBack: () => {
      dispatch(toBack());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
