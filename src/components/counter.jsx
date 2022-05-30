import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-6 col-sm-3">
          <span>
            {this.props.counter.count !== 0 ? this.props.counter.count : "Zero"}
          </span>
        </div>
        <div className="col-6 col-sm-3">
          <button
            onClick={() => {
              this.props.incCount(this.props.counter.id);
            }}
            className="btn"
          >
            +
          </button>
          <button
            disabled={this.props.counter.count === 0}
            className="btn btn-danger"
            onClick={() => {
              this.props.decCount(this.props.counter.id);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.props.removeCounter(this.props.counter.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
