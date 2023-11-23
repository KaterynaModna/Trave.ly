import React from 'react';
import './css/style.scss';
import './css/main.scss';


// components

import Background from './components/Background';
import Table_grid from './components/Table_grid';
import Grida from './components/Grid';
import FormFooter from './components/FormFooter';
import FormHeader from './components/FormHeader'


function App() {
  return (
    <div className="App wrapper">
      <Background/>
      <FormHeader/>
      <Grida />
      <Table_grid />
      <FormFooter/>
    </div>
  );
}

export default App;
