import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.incCount = this.incCount.bind(this);
    this.decCount = this.decCount.bind(this);
    this.resetCounters = this.resetCounters.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.returnActiveCounters = this.returnActiveCounters.bind(this);
    this.state = {
      counters: [
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 },
      ],
    };
  }
  returnActiveCounters() {
    let inc = 0;
    this.state.counters.forEach((counter) => {
      if (counter.count !== 0) {
        inc++;
      }
    });
    return inc === 0 ? "Zero" : inc;
  }
  removeCounter(id) {
    const newCounters = [];
    this.state.counters.forEach((counter) => {
      if (counter.id !== id) {
        newCounters.push(counter);
      }
    });
    this.setState(() => ({ counters: newCounters }));
  }
  resetCounters() {
    let inc = 0;
    this.setState((prevState) => ({
      counters: prevState.counters.map(() => {
        inc++;
        return { id: inc, count: 0 };
      }),
    }));
  }
  incCount(id) {
    const newCounters = [];
    this.state.counters.forEach((counter) => {
      if (counter.id === id) {
        counter.count++;
      }
      newCounters.push(counter);
    });
    this.setState(() => ({ counters: newCounters }));
  }
  decCount(id) {
    const newCounters = [];
    this.state.counters.forEach((counter) => {
      if (counter.id === id) {
        counter.count--;
      }
      newCounters.push(counter);
    });
    this.setState(() => ({ counters: newCounters }));
  }
  render() {
    return (
      <div className="App">
        <Header count={this.returnActiveCounters()} />
        <Counters
          counters={this.state.counters}
          incCount={this.incCount}
          decCount={this.decCount}
          resetCounters={this.resetCounters}
          removeCounter={this.removeCounter}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

export default App;
