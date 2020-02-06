import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Header from './header';
import { login } from '../actions/login';
import { connect } from 'react-redux';

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: ''
    };
  }

  onhandleLogin = evt => {
    var target = evt.target;
    var name = target.name;

    var value = target.value;

    this.setState({
      [name]: value
    });
  };

  onLogin = () => {
    if (this.state.email === 'hung' && this.state.pass === 'hung') {
      this.props.islogin();
      alert('Welcome');
    } else {
      alert('Wrong Infomation');
    }
  };

  render() {
    const Forrmm = {
      float: 'center'
    };
    const isLogin = this.props.isLogin;

    return (
      <div>
        <div className='container1'>
          <Header />
        </div>
        <div className='container'>
          <div className='form'>
            {!isLogin ? (
              <Form style={Forrmm}>
                <Form.Group as={Row} controlId='formHorizontalEmail'>
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name='email'
                      value={this.state.email}
                      onChange={evt => this.onhandleLogin(evt)}
                      size='lg'
                      style={{ width: '400px' }}
                      type='text'
                      placeholder='admin'
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formHorizontalPassword'>
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name='pass'
                      value={this.state.pass}
                      onChange={evt => this.onhandleLogin(evt)}
                      size='lg'
                      style={{ width: '400px' }}
                      type='password'
                      placeholder='Password'
                    />
                  </Col>
                </Form.Group>
                <Button
                  onClick={() => this.onLogin(this.state)}
                  variant='primary'
                  type='submit'
                >
                  Login
                </Button>
              </Form>
            ) : (
              'Welcome Admin '
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin
  };
};

const mapDispathToProps = dispatch => {
  return {
    islogin: () => {
      dispatch(login());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
