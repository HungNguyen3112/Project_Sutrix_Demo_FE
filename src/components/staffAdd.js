import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import Header from './header';
import axios from 'axios';
import { addNewStaff, updateStaff } from '../actions/staffAdd';
import { connect } from 'react-redux';

class AddStaff extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      DoB: '',
      gender: '',
      address: '',
      mobile: '',
      skype: '',
      email: '',
      join_date: '',
      department_staff: '',
      image: ''
    };
  }

  componentDidMount = () => {
    const { isAddStaff, staffItems } = this.props;
    {
      isAddStaff
        ? this.setState({
            first_name: '',
            last_name: '',
            DoB: '',
            gender: '',
            address: '',
            mobile: '',
            skype: '',
            email: '',
            join_date: '',
            department_staff: '',
            image: ''
          })
        : this.setState({
            first_name: staffItems.first_name,
            last_name: staffItems.last_name,
            DoB: staffItems.DoB,
            gender: staffItems.gender,
            address: staffItems.address,
            mobile: staffItems.mobile,
            skype: staffItems.skype,
            email: staffItems.email,
            join_date: staffItems.join_date,
            department_staff: staffItems.department_staff,
            image: staffItems.image
          });
    }
  };

  onPutInfo = () => {
    {
      this.props.isAddStaff
        ? axios
            .post('http://localhost:3001/staff/addNewStaff', {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              DoB: this.state.DoB,
              gender: this.state.gender,
              address: this.state.address,
              mobile: this.state.mobile,
              skype: this.state.skype,
              email: this.state.email,
              join_date: this.state.join_date,
              department_staff: this.state.department_staff,
              image: this.state.image
            })
            .then(res => {
              alert('Successfully');

              this.setState({
                first_name: '',
                last_name: '',
                DoB: '',
                gender: '',
                address: '',
                mobile: '',
                skype: '',
                email: '',
                join_date: '',
                department_staff: '',
                image: ''
              });
            })
        : axios
            .put(
              'http://localhost:3001/staff/updateStaff/' +
                this.props.staffItems.staff_id,
              {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                DoB: this.state.DoB,
                gender: this.state.gender,
                address: this.state.address,
                mobile: this.state.mobile,
                skype: this.state.skype,
                email: this.state.email,
                join_date: this.state.join_date,
                department_staff: this.state.department_staff,
                image: this.state.image
              }
            )
            .then(res => {
              alert('Successfully');
            });
    }
  };
  onGetInfo = evt => {
    var target = evt.target;
    var value = target.value;
    var name = target.name;
    if (name === 'image') {
      value = 'image/' + target.files[0].name;
    }
    this.setState({
      [name]: value
    });
    console.log('hinh', this.state.image);
  };

  onSub = evt => {
    evt.preventDefault();
  };

  render() {
    console.log('time', this.props.staffItems.join_date);
    const { isAddStaff, staffItems } = this.props;
    const department = staffItems.department_staff;

    return (
      <div>
        <div className='container1'>
          <Header />
        </div>
        <div className='menu'>
          {this.props.isAddStaff ? <h2>Staff-->Add</h2> : <h2>Staff-->Edit</h2>}
        </div>
        <Form onSubmit={this.onSub}>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              First Name
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                name='first_name'
                value={this.state.first_name}
                type='text'
                placeholder='First Name'
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Last Name
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='text'
                placeholder='Last name'
                name='last_name'
                value={this.state.last_name}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              DoB
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='Datetime'
                placeholder='yyyy-mm-dd'
                name='DoB'
                value={this.state.DoB}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} controlId='formHorizontalEmail'>
              <Form.Label column sm={2}>
                Radio
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type='radio'
                  label='....Male'
                  name='gender'
                  id='formHorizontalRadios1'
                  value='1'
                  defaultChecked={
                    !isAddStaff && staffItems.gender === 1 ? true : false
                  }
                  onChange={evt => this.onGetInfo(evt)}
                />
                <Form.Check
                  type='radio'
                  label='....Female'
                  name='gender'
                  id='formHorizontalRadios2'
                  value='2'
                  defaultChecked={
                    !isAddStaff && staffItems.gender === 2 ? true : false
                  }
                  onChange={evt => this.onGetInfo(evt)}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='text'
                placeholder='Address'
                name='address'
                value={this.state.address}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Mobile
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='number'
                placeholder='Mobile'
                name='mobile'
                value={this.state.mobile}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Skype
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='email'
                placeholder='Skype'
                name='skype'
                value={this.state.skype}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='email'
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Join Date
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type='Datetime'
                placeholder='yyyy-mm-dd'
                name='join_date'
                value={this.state.join_date}
                onChange={evt => this.onGetInfo(evt)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='exampleForm.ControlSelect1'>
            <Form.Label column sm={2}>
              Department
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                as='select'
                name='department_staff'
                value={this.state.department_staff}
                onChange={evt => this.onGetInfo(evt)}
              >
                <option value={staffItems.department_staff}>
                  {isAddStaff ? '--Choose Department--' : department}
                </option>
                <option value='Fontend'>Fontend</option>
                <option value='Backend'>Backend</option>
                <option value='Java'>Java</option>
                <option value='QC'>QC</option>
                <option value='BA'>BA</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Card
            style={{
              width: '20rem',
              float: 'right',
              top: '20%',
              right: '20%',
              position: 'absolute',
              height: '30rem'
            }}
          >
            <Card.Img variant='top' src={this.state.image} />
            <Card.Body>
              <input
                type='file'
                variant='primary'
                name='image'
                onChange={evt => this.onGetInfo(evt)}
              />
            </Card.Body>
          </Card>

          <Form.Group as={Row}>
            <Col sm={{ span: 100, offset: 3 }}>
              <Button
                type='submit'
                onClick={() => this.onPutInfo(this.state)}
                style={{ width: '70px' }}
              >
                Enter
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAddStaff: state.addStaff.isAddStaff,
    staffItems: state.filterStaff.staffItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    putStaff: data => {
      dispatch(updateStaff(data));
    },
    addStaff: data => {
      dispatch(addNewStaff(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStaff);
