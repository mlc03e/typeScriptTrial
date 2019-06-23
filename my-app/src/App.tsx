import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">

          <Header name="REACT" />
        </header>
        <Description countBy={1} />
      </div>
    );
  }
}

export default App;
