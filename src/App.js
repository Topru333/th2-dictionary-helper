import './App.css';
import Dictionary from './components/DictionaryComponent';
import React from 'react';

import Editor from './components/Editor';


class App extends React.Component {
  state = {
    cards: [
      { id: 1, name: "foo" },
      { id: 2, name: "bar" },
      { id: 3, name: "baz" }
    ],
    selected: {}
  };

  handleSelect = id =>
    this.setState(state => ({
      selected: { ...state.selected, [id]: !state.selected[id] }
    }));

  render() {
    const { cards, selected } = this.state;
    return (
      <div className="App ">
        <div id="Combiner">
          <div className="CombinerPart">
            <Dictionary id="leftDictionary"/>
          </div>
          <div className="CombinerPart">
            <Dictionary id="rightDictionary"/>
          </div>
        </div>
        <div id="log">
          <div id="logContainer">
            <Editor placeholder="Logs here" className="SolidBorderInside SolidBorderInsideFocus"/>
          </div>
        </div>
      </div>
    );
  }
}

// <div>
//   {cards.map(card => (
//     <Card
//       key={card.id}
//       card={card}
//       handleSelect={this.handleSelect}
//       selected={selected[card.id]}
//     />
//   ))}
// </div>

const Card = ({ card, handleSelect, selected }) => {
  const handleClick = () => handleSelect(card.id);
  return (
    <div className={selected ? "selected" : ""} onClick={handleClick}>
      {card.id}-{card.name}
    </div>
  );
};

export default App;
