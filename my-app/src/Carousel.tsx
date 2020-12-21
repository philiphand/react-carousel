import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Pane1 from './Panes/Pane1';
import Pane2 from './Panes/Pane2';
import Pane3 from './Panes/Pane3';

function Carousel(props: any) {
  const [currentPaneNumber, setCurrentPaneNumber] = useState(0) // get from redux global state
  const [numberOfPanes, setNumberOfPanes] = useState(0)
  const [renderedPanes, setRenderedPanes] = useState([1])
  const renderedPanesRef = useRef(renderedPanes)
  renderedPanesRef.current = renderedPanes
  const currentPaneNumberRef = useRef(currentPaneNumber)
  currentPaneNumberRef.current = currentPaneNumber

  useEffect(() => {
    const panes = document.getElementById("carousel")?.childNodes.length //Replace with props.children
    setNumberOfPanes(panes ? panes : 0)
  }, [])

  const changePaneByOffset = (offset: number) => {
    let newRenderedPanes = [...renderedPanes]
    newRenderedPanes[currentPaneNumber + offset] = 1
    setRenderedPanes(newRenderedPanes)
    
    setCurrentPaneNumber(currentPaneNumber + offset)

    setTimeout(() => {
      let newRenderedPanes = [...renderedPanesRef.current]
      newRenderedPanes[currentPaneNumberRef.current - offset] = 0
      setRenderedPanes(newRenderedPanes)
    }, 200)
  }

  const prevPane = () => {
    if (currentPaneNumber > 0) {
      changePaneByOffset(-1)
    }
  }

  const nextPane = () => {
    if (currentPaneNumber < numberOfPanes - 1) {
     changePaneByOffset(1)
    }
  }
 
  return (
    <div id="carousel-wrapper">
      <div id="carousel" style={{transform: `translate3d(${(currentPaneNumber * -100)}%, 0px, 0px)`}}>
        {props.children.map((child: any, i: number) => {
          return <div className="pane" key={i}>{child}</div>
        })}
      </div>
      <div>
        <button onClick={prevPane}>Prev</button>
        <button onClick={nextPane}>Next</button>
      </div>
    </div>
  )
}

export default Carousel;
