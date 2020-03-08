import React from 'react';

const DataTable = props => {
  let cell = props.cell

  let rows = [[1,2,3], [4,5,6], [7,8,9]]

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
export default DataTable;
