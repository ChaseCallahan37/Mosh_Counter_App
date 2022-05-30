import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.createCounters = this.createCounters.bind(this);
  }
  createCounters() {
    return this.props.counters.map((counter) => {
      return (
        <Counter
          key={counter.id}
          counter={counter}
          incCount={this.props.incCount}
          decCount={this.props.decCount}
          removeCounter={this.props.removeCounter}
        >
          {counter.id}
        </Counter>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.props.resetCounters}>Reset</button>
        {this.createCounters()}
      </div>
    );
  }
}

export default Counters;
