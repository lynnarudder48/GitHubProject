// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "noImplicitAny": false,
    "jsx": "preserve"
  }
}

// code
import { assert } from 'ts-node';
import * as React from 'react';

class CounterComponent extends React.Component {
  state = {
    count: 0
  };

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterComponent;
