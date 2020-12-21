import React, { useRef, useState } from 'react';
import './App.css';
import Carousel from './Carousel';
import Pane1 from './Panes/Pane1';
import Pane2 from './Panes/Pane2';
import Pane3 from './Panes/Pane3';

function App() {

  return (
    <div id="app">
      <Carousel>
        <Pane1 />
        <Pane2 />
        <Pane3 />
      </Carousel>
    </div>
  );
}

export default App;
