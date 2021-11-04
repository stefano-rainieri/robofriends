import React, { useState, useEffect } from 'react';
import { CardList } from '../components/CardList';
import { Scroll } from '../components/Scroll';
import { SearchBox } from '../components/SearchBox';
import { ErrorBoundary } from '../components/ErrorBoundary';

export /*class*/ function App() /*extends React.Component*/ {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     robots: [],
  //     searchField: '',
  //   };
  // }
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const [count, setCount] = useState(0)

  // async componentDidMount() {
  //   const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  //
  //   this.setState({
  //     robots: data,
  //   })
  // }
  useEffect(() => {
    (async () => {
      const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

      setRobots(data);
    })()
  }, [count]);

  const onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value });
    setSearchField(event.target.value);
  }

  // render() {
  const filteredRobots = /*this.state.*/robots.filter(
    robot => robot.name.toLowerCase().includes(/*this.state.*/searchField.toLowerCase())
  );

  if (0 === /*this.state.*/robots.length) {
    return <h1 className="tc f1">Loading</h1>
  }
  return (
    <div className="tc" id="app">
      <header>
        <h1 className="f1">RoboFriends</h1>
        <button className="pv2 ph3 ba b--black bg-moon-gray br3 pointer" onClick={() => setCount(count + 1)}>Refresh!</button>
        <SearchBox searchChange={onSearchChange}/>
      </header>
      <main>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </main>
    </div>
  );
  // }
}