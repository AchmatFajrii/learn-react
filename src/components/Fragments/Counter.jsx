import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div className="flex items-center justify-center mt-10 gap-x-4">
          <span className="font-semibold text-xl">{this.state.count}</span>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
            className="bg-black text-white font-semibold py-1 px-4"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
