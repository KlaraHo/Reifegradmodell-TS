import React from 'react';

import Introbox from './components/Introbox';
import CSV from './components/CSV';
import Dataquality from './components/Dataquality/Dataquality';
import Infoquality from './components/Infoquality/Infoquality';
import Knowquality from './components/Knowquality/Knowquality';
import Maintenancequality from './components/Maintenancequality/Maintenancequality';
import Result from './components/Result';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Introbox />
      <CSV />
      <Dataquality />
      <Infoquality />
      <Knowquality />
      <Maintenancequality />
      <Result />
      <Footer />
    </React.Fragment>
     
  );
}

export default App;
