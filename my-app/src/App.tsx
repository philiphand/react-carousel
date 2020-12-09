import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Pane1 from './Panes/Pane1';
import Pane2 from './Panes/Pane2';
import Pane3 from './Panes/Pane3';

function App() {
  const [currentPaneNumber, setCurrentPaneNumber] = useState(0)
  const [renderedPanes, setRenderedPanes] = useState([1, 0, 0])
  const renderedPanesRef = useRef(renderedPanes)
  renderedPanesRef.current = renderedPanes
  const currentPaneNumberRef = useRef(currentPaneNumber)
  currentPaneNumberRef.current = currentPaneNumber

  const nextPane = () => {

    let newRenderedPanes = [...renderedPanes]
    newRenderedPanes[currentPaneNumber + 1] = 1
    setRenderedPanes(newRenderedPanes)
    
    setCurrentPaneNumber(currentPaneNumber + 1)

    setTimeout(() => {
      console.log(renderedPanesRef.current)
      console.log(currentPaneNumberRef.current)

      let newRenderedPanes = [...renderedPanesRef.current]
      newRenderedPanes[currentPaneNumberRef.current - 1] = 0
      setRenderedPanes(newRenderedPanes)
    }, 200)
  }

  useEffect(() => {
    console.log(renderedPanes)
  }, [renderedPanes]) 

  return (
    <div id="app">
      <div id="carousel-wrapper">
        <div id="carousel" style={{transform: `translate3d(${(currentPaneNumber * -100)}%, 0px, 0px)`}}>
          <div className="pane">{renderedPanes[0] == 1 && <Pane1 />}</div>
          <div className="pane">{renderedPanes[1] == 1 && <Pane2 />}</div>
          <div className="pane">{renderedPanes[2] == 1 && <Pane3 />}</div>
        </div>
        <div>
          <button onClick={() => {setCurrentPaneNumber(currentPaneNumber - 1)}}>Prev</button>
          <button onClick={nextPane}>Next</button>
       </div>
      </div>
    </div>
  );
}

export default App;
