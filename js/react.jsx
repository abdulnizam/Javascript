import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './datatable.js';

const SimpleComponent = () => {
  return <h1>hello world</h1>;
}

ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
