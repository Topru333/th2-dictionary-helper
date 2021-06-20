import React from 'react';
import Editor from './Editor';
import './css/InsertComponent.css';

class InsertComponent extends React.Component {
  render() {
    return (
      <div className="InsertComponent">
        <div id="InsertContainer">
          <Editor placeholder="Insert data" className="SolidBorderInside SolidBorderInsideFocus"/>
        </div>
        <div id="InsertControl">
          <div id="InsertControlContainer">
            <button id="InsertValidate" className="ControlButton SolidBorder">
              Validate
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default InsertComponent;
