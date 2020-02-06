import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { filterResult } from '../actions/staffFilter';
import Header from './header';
import Menu from './menu';

class ResultFilterComponent extends React.Component {
  onGetResultStaff = staff => {
    this.props.getResultStaff(staff);
  };

  render() {
    var { isFilter, staffItems } = this.props;
    console.log('staff', staffItems);
    return (
      <div>
        <div className='container1'>
          <Header />
        </div>
        <div className='menu2'>
          <Table>
            <tr>
              <td class='menu2'>Staff-->Result</td>
              <Menu />
            </tr>
          </Table>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Join Date</th>
              <th>Skype</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>
            {isFilter
              ? staffItems.map((data, index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>
                        <Link
                          to='/staffinfo'
                          onClick={() => this.onGetResultStaff(data)}
                        >
                          {data.last_name} {data.first_name}
                        </Link>
                      </td>
                      <td>{data.join_date}</td>
                      <td>{data.skype}</td>
                      <td>{data.email}</td>
                      <td>{data.department_staff}</td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFilter: state.filterStaff.isFilter,
    staffItems: state.filterStaff.staffItems
  };
};

const mapDispatchToPro = dispatch => {
  return {
    getResultStaff: staff => {
      dispatch(filterResult(staff));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPro
)(ResultFilterComponent);
