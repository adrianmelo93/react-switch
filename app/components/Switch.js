import React, { PropTypes } from 'react';

const CREDITCART = 'Creditcard';
const BTC = 'Bitcoin';

function Choice(props) {
  const cssClasses = [];

  if(props.active) {
    cssClasses.push('active');

  }
  return (
    <div
      className='choice'
      onClick={ props.onClick }
      className= { cssClasses }
    >
      {props.label}
    </div>
  );
}

class Switch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    payMethod: BTC
  };

  this.select = this.select.bind(this);
  // this.renderChoice = this.renderChoice.bind(this);
}


  select(choice) {
    return (evt) => {
      this.setState({
        payMethod: choice
      });
    };
  }


  render() {
    return(
      <div className='switch'>
        <Choice
          onClick={this.select(CREDITCART)}
          active={this.state.payMethod === CREDITCART}
          label={'Pay with Credit Card'}
        />

        <Choice
          onClick={this.select(BTC)}
          active={this.state.payMethod === BTC}
          label={'Pay with Bitcoin'}
        />

        Pay with: { this.state.payMethod }
      </div>
    );
  }
}

export default Switch;
