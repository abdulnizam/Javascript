import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./store/index";
import { addCols, addRows, addErrors } from "./actions/index";

import DataTable from './datatable';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    addCols: val => dispatch(addCols(val)),
    addRows: val => dispatch(addRows(val)),
    addErrors: val => dispatch(addErrors(val))
  };
}

function mapStateToProps(state){
  return {
        cols: state.cols,
        rows: state.rows,
        errors: state.errors
    }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cols: '', rows: '', errors: ''};
    this.cols = React.createRef();
    this.rows = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
      store.subscribe(() => {
          this.setState({cols: store.getState().cols, rows: store.getState().rows, errors: store.getState().errors});
      });
  }

  handleSubmit(event) {

    if((this.cols.current.value > 9 || this.cols.current.value == 0) || (this.rows.current.value > 9 || this.rows.current.value == 0)) {
      let mess = 'Please input number between 1-9';
      this.props.addErrors(mess);
    }
    else {
      this.props.addCols(this.cols.current.value);
      this.props.addRows(this.rows.current.value);
      this.props.addErrors('');
    }
    event.preventDefault();

  }

  render() {

    let alertMessage = '';
    if(this.state.errors) {
      alertMessage = <div className="alert alert-danger col-md-12" role="alert"> {this.state.errors} </div>
    }

    return (
      <div className="container">
        <style>
        {`
          .main-div {
            width: 400px;
          }
          .middle-center {
            margin-left:auto;
            margin-right:auto;
          }
          .form-div {
            width: 500px;
          }
          hr {
            margin-top: 1rem;
            margin-bottom: 1rem;
            border: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }

        `}
        </style>
        <div className="page-header">
          <h2>Create Table with given Rows and Columns</h2>
        </div>
        <hr />

        <div className="form-div middle-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" ref={this.cols} />
                <label htmlFor="inputColumns">columns</label>

              </div>
              <div className="col">
                <input type="text" className="form-control" ref={this.rows} />
                <label htmlFor="inputRows">Rows</label>

              </div>
            </div>
            <div className="text-center">
              <input type="submit" value="Create Table" className="btn btn-primary" />
            </div>
          </form>
        </div>


        <br />
        {alertMessage}
        <div className="main-div middle-center">
          <DataTable columns={this.state.cols} rows={this.state.rows} />
        </div>
      </div>
    );
  }
}

const TableForm = connect(mapStateToProps, mapDispatchToProps)(Table);

ReactDOM.render(
  <Provider store={store}>
    <TableForm />
  </Provider>,
  document.getElementById('root'));
