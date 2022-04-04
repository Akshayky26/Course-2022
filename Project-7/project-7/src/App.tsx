import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Diffdiv, Diffdiv2, Hone, Hthree, Htwo, Mydiv, Mydiv2, Mydiv3, Styledh4 } from './styled-components/components/Hone';

function App() {
  return (
    <>
      <Hone/>
      <Htwo/>
      <Hthree/>
      <Styledh4/>
      <Mydiv/>
      <Mydiv2/>
      <Mydiv3/>
      <Diffdiv value={true}/>
      <Diffdiv2 value={false}/>
    </>
  );
}

export default App;
