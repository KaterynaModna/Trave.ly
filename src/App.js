import React from 'react';
import './css/style.scss';
import './css/main.scss';


// components

import Background from './components/Background';
import Table_grid from './components/Table_grid';
import Grida from './components/Grid';
import FAQ from './components/FAQ';
import Comments from './components/Сomments';
import FormFooter from './components/FormFooter';
import FormHeader from './components/FormHeader'


function App() {
  return (
    <div className="App wrapper">
      <Background/>
      <FormHeader/>
      <Grida />
      <Table_grid />
      <FAQ />
      {/* <Comments/> */}
      <FormFooter/>
    </div>
  );
}

export default App;
