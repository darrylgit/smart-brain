import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: ''
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries) {
      return null;
    }
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = entries => {
    fetch(
      `https://x7iz5mijgj.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then(res => res.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>{this.props.entries}</div>
        <div className='white f3'>{`Rank Badge: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
