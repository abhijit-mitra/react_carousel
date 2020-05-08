import React from 'react';
import {Carousel} from './components/organisms';
import {allProducts} from './constants';
import './App.css';

function App() {
  return (
    <div className="p-5">
      <Carousel data={allProducts}/>
    </div>
  );
}

export default App;
