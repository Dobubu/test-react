import React from 'react';

// Class Component -----

class ClockClass extends React.Component {
  // 1
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      isToggleOn: false
    };
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // 3
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 2
  render() {
    return pug`
      div
        h1 Hello, world!

        h2 It is #{ this.state.date.toLocaleTimeString() }.

        button(onClick=this.toggle) toggle
    `
  }
}

export default ClockClass