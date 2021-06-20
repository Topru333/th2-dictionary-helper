import React from 'react';
import Editor from './Editor';
import './css/DictionaryComponent.css';

class DictionaryComponent extends React.Component {
  render() {
    return (
      <div className="DictionaryComponent">
        <div id="DictionaryContainer">
          <Editor placeholder="Dictionary data" className="SolidBorderInside SolidBorderInsideFocus"/>
        </div>
        <div id="DictionaryControl">
          <div id="DictionaryControlContainer">
            <button id="DictionaryValidate" className="ControlButton SolidBorder">
              Validate
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default DictionaryComponent;
