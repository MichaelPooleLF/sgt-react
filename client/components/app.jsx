import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({
        grades: data
      }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <Header />
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

export default App;
