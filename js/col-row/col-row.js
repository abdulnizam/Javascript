"use strict";
// constants
const ADD_COL = "ADD_COL";
const ADD_ROW = "ADD_ROW";
const ADD_ERR = "ADD_ERR";

// set initial state
const initialState = {
  cols: '', rows: '', errors: ''
};

// reducers
function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_COL:
      state.cols = action.payload;
      break;

    case ADD_ROW:
      state.rows = action.payload;
      break;

    case ADD_ERR:
      state.errors = action.payload;
      break;
  }

  return state;
};

// store
const createStore = Redux.createStore;
const store = createStore(rootReducer);

// actions
function addCols(payload) {
  return { type: "ADD_COL", payload }
};

function addRows(payload) {
  return { type: "ADD_ROW", payload }
};

function addErrors(payload) {
  return { type: "ADD_ERR", payload }
};

// datatable
const DataTable = props => {
  let _cols = props.columns
  let rows = []
  let _rows = props.rows

  for (let j = 1; j <=  _rows; j++) {
    let cols = [];
    for (let i = 1; i <= _cols; i++) {
      let a = 'c'+i+'r'+j
      cols.push(a);
    }
    rows.push(cols);
  }

  let tableBody = rows.map(function(col, id) {
    return (
      <tr key={id}>
        {col.map(function(column, key) {
          return <td key={key}>{column} <img width="40" height="40" src="https://randomuser.me/api/portraits/women/1.jpg" /></td>; })}
      </tr>

    );

    });

   return (
     <div>
      <table className="table table-bordered table-hover" width="100%">
        <tbody>
         {tableBody}
        </tbody>
       </table>
    </div>
  );
}

// react-redux provider
const Provider = ReactRedux.Provider;
// react-redux connect
const connect = ReactRedux.connect;

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
