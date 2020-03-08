import React from 'react';

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

  var tableBody = rows.map(function(col, id) {
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

export default DataTable;
