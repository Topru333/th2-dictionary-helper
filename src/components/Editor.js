import React from 'react';
import ReactDOM from 'react-dom'
import './css/Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }

  state = {
    focused: false,
    placeholder: this.props.placeholder,
    value: ""
  };

  onFocus = () => this.setState({
    focused: true
  });

  onBlur = () => this.setState({
    focused: false
  });

  handleChange = (event) => this.setState({value: event.target.value});

  render() {
    return (
      <div ref={this.editor} className={"Editor " + (this.state.focused ? 'Focused' : '')}>
        <textarea id="InsertInput" value={this.state.value} placeholder={this.state.placeholder} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Editor;
