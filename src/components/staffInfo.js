import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Row, Button, Table, Card } from 'react-bootstrap';
import { getHistory, addHistory, deleteHistory } from '../actions/staffHistory';
import axios from 'axios';
import Header from './header';
import Menu from './menu';

class staffInfoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      history_comment: ''
    };
  }
  componentDidMount = () => {
    axios
      .get(
        'http://localhost:3001/histories/gethistorybystaff/' +
          this.props.staffItems.staff_id
      )
      .then(res => {
        console.log('Result', res.data);
        this.props.getHistoryResult(res.data);
      });
  };

  onChangeHistory = evt => {
    this.setState({
      history_comment: evt.target.value
    });
  };
  onSub = evt => {
    evt.preventDefault();
  };

  onDeleteHistory = history => {
    axios
      .delete(
        'http://localhost:3001/histories/deletehistory/' + history.history_id
      )
      .then(res => {
        this.props.deleteHistoryById(history);
      });
  };

  onAddHistory = () => {
    axios
      .post('http://localhost:3001/histories/addhistory', {
        histories_work: this.state.history_comment,
        staff_id: this.props.staffItems.staff_id,
        histories_time: new Date()
      })
      .then(res => {
        this.props.addNewHistory(res.data);
        this.setState({
          history_comment: ''
        });
        console.log('data', res.data);
      });
  };

  render() {
    const { isGetInfoHistory, infoHistory } = this.props;
    return (
      <div>
        <div className='container1'>
          <Header />
        </div>
        <div className='menu2'>
          <Table>
            <tr>
              <td class='menu2'>Staff-->Information</td>
              <Menu />
            </tr>
          </Table>
        </div>
        <div className='container'>
          <div style={{ float: 'right' }}>
            <Card style={{ width: '20rem', height: '30rem' }}>
              <Card.Img variant='top' src={this.props.staffItems.image} />
            </Card>
          </div>
          <div className='form'>
            <Form onSubmit={this.onSub} className='info'>
              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  First Name:
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.first_name}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Last Name :
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.last_name}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Date Of Birth
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.DoB}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Gender
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.gender === 1 ? 'Male' : 'Female'}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Address
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='10'>
                    {this.props.staffItems.address}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Mobile
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.mobile}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Skype
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.skype}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Email
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.email}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Join Date
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.join_date}
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                  Department
                </Form.Label>
                <Col sm='2'>
                  <Form.Label column sm='5'>
                    {this.props.staffItems.department_staff}
                  </Form.Label>
                </Col>
              </Form.Group>

              <h3 style={{ float: 'left', color: 'brown' }}>Histories: </h3>
              {isGetInfoHistory
                ? infoHistory.map((history, index) => {
                    return (
                      <Table striped bordered hover>
                        <tbody>
                          <tr>
                            <td style={{ width: '85%' }}>
                              {history.histories_time}
                            </td>
                            <td>
                              {' '}
                              <Button
                                variant='primary'
                                type='submit'
                                onClick={() => this.onDeleteHistory(history)}
                              >
                                <i class='glyphicon glyphicon-remove'></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan='2' style={{ textAlign: 'center' }}>
                              {history.histories_work}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    );
                  })
                : ''}
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label style={{ color: 'brown' }}>
                  Add New History
                </Form.Label>
                <Form.Control
                  as='textarea'
                  rows='5'
                  value={this.state.history_comment}
                  onChange={evt => this.onChangeHistory(evt)}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                onClick={() => this.onAddHistory(this.state)}
              >
                Add History
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    staffItems: state.filterStaff.staffItems,
    infoHistory: state.historyWork.infoHistory,
    isGetInfoHistory: state.historyWork.isGetInfoHistory
  };
};

const mapDispathToProps = dispatch => {
  return {
    getHistoryResult: history => {
      dispatch(getHistory(history));
    },
    addNewHistory: newHistory => {
      dispatch(addHistory(newHistory));
    },
    deleteHistoryById: History => {
      dispatch(deleteHistory(History));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(staffInfoComponent);
