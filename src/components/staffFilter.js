import React from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filterStaff, inputData } from '../actions/staffFilter';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';
import Menu from './menu';
class filterStaffComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      department: ''
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/staff/allstaff').then(res => {
      this.props.inputDataStaff(res.data);
    });
  };

  onSearch = () => {
    this.props.onSearch(
      this.props.staffItems,
      this.state.keyword,
      this.state.department
    );
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
  };

  onGetInfo = evt => {
    var target = evt.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    console.log('info', this.state);
  };

  render() {
    return (
      <div>
        <div className='container1'>
          <Header />
        </div>
        <div className='menu2'>
          <Table>
            <tr>
              <td class='menu2'>Staff-->Filter</td>

              <Menu />
            </tr>
          </Table>
        </div>
        <div className='container'>
          <div className='form'>
            <Form onSubmit={this.onHandleSubmit}>
              <Form.Group as={Row} controlId='formHorizontalPassword'>
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type='text'
                    placeholder='filter Name'
                    size='lg'
                    style={{ width: '400px' }}
                    name='keyword'
                    value={this.state.keyword}
                    onChange={evt => this.onGetInfo(evt)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId='exampleForm.ControlSelect1'>
                <Form.Label column sm={2}>
                  Department
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as='select'
                    name='department'
                    size='lg'
                    style={{ width: '400px' }}
                    value={this.state.department}
                    onChange={evt => this.onGetInfo(evt)}
                  >
                    <option>--Choose Department--</option>
                    <option value='Fontend'>Fontend</option>
                    <option value='Backend'>Backend</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Link to='/filterResult'>
                    <Button type='submit' onClick={this.onSearch}>
                      Sign in
                    </Button>
                  </Link>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    staffItems: state.filterStaff.staffItems
  };
};

const mapDispathToProps = dispatch => {
  return {
    inputDataStaff: dataStaff => {
      dispatch(inputData(dataStaff));
    },
    onSearch: (data, keyword, department) => {
      dispatch(filterStaff(data, keyword, department));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(filterStaffComponent);
