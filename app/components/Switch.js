import React, { PropTypes } from 'react';

const CREDITCART = 'Creditcard';
const BTC = 'Bitcoin';

class Switch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    payMethod: BTC
  };

  this.select = this.select.bind(this);
  this.renderChoice = this.renderChoice.bind(this);
}


  select(choice) {
    return (evt) => {
      this.setState({
        payMethod: choice
      })
    }
  }

  renderChoice(choice) {
    return (
        <div className='choice active' onClick={ this.select(choice)}>
          {choice}
        </div>
      );
    }


  render() {
    return(
      <div className='switch'>
        { this.renderChoice(CREDITCART) }
        { this.renderChoice(BTC) }

        Pay with: { this.state.payMethod }
      </div>
    );
  }
}

export default Switch;
