import { Component } from "react";

export default class CounterOneClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Inside componentDidUpdate - Updating doc title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click here</button>
        <h3>Clicked {this.state.count} times</h3>
      </>
    );
  }
}