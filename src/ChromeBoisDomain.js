import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    // it('invokes the `drawChromeBoiAtCoords` method within `handleMouseMove`, passing the captured x and y values of the mouse from the event', () => {
    // const event = {
    // clientX: 33,
    // clientY: 44
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
    // eventHandler = (event) => {
    //   toggleCycling()
    // }
    toggleCycle = (event) => {
      toggleCycling()
    }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  eventResize = (event) => {
    if (event.key === 'a') {
      resize("+")
    } else if (event.key === 's'){
      resize("-")
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycle}
        onKeyUp={this.eventResize}
        // onKeyPress={this.eventResize}
        // onKeyDown={this.eventResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
