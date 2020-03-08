"use strict";

// datatable
const DataTable = props => {
  let cell = props.cell;
  let rows = [[1,2,3], [4,5,6], [7,8,9]];

  var tableBody = rows.map(function(col, id) {
    return (
      <tr key={id}>
        {col.map(function(column, key) {
          return <td key={key} style={{'backgroundColor': cell == column ? 'green' : 'white'}}>{column}</td>; })}
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

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cols: '', rows: '', errors: ''};
    this.cols = React.createRef();

    this.handleChangeCols = this.handleChangeCols.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCols(event) {
    this.setState({cols: event.target.value});
  }

  handleSubmit(event) {

    if(this.cols.current.value > 9 || this.cols.current.value == 0) {
      let mess = 'Please input number between 1-9';
      this.setState({errors: mess });
    }
    else {
      this.setState({cols: this.cols.current.value, errors: '' });
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
            magin-top: 10px !important;
          }
          .middle-center {
            margin-left:auto;
            margin-right:auto;
          }
          .form-div {
            width: 500px;
          }

          .btn-primary {
            font-family: Raleway-SemiBold;
            font-size: 13px;
            color: rgba(58, 133, 191, 0.75);
            letter-spacing: 1px;
            line-height: 15px;
            border: 2px solid rgba(58, 133, 191, 0.75);
            border-radius: 40px;
            background: transparent;
            transition: all 0.3s ease 0s;
          }

          .btn-primary:hover {
            color: #FFF;
            background: rgba(58, 133, 191, 0.75);
            border: 2px solid rgba(58, 133, 191, 0.75);
          }

        `}
        </style>
        <div className="page-header">
          <h2>Color the given input</h2>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col-md-12 d-flex justify-content-center">
                  <input type="text" className="form-control col-md-6" ref={this.cols} />
                </div>
              </div>
              <br />
              <div className="text-center">
                <input type="submit" value="Color Me" className="btn btn-primary" />
              </div>
            </form>
          </div>


          <div className="col-md-6">
            <DataTable cell={this.state.cols} />
          </div>
          {alertMessage}
        </div>

      </div>
    );
  }
}

ReactDOM.render(<Color />, document.getElementById('root'));
