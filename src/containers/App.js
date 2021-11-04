import React from 'react';
import { CardList } from '../components/CardList';
import { Scroll } from '../components/Scroll';
import { SearchBox } from '../components/SearchBox';
import { ErrorBoundary } from '../components/ErrorBoundary';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    this.setState({
      robots: data,
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(
      robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    if (0 === this.state.robots.length) {
      return <h1 className="tc f1">Loading</h1>
    }
    return (
      <div className="tc" id="app">
        <header>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <main>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </main>
      </div>
    );
  }
}