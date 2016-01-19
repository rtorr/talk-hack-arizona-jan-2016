import React from 'react';

class TimeTraveler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
  }
  
  handleShow() {
    return this.setState({show: !this.state.show});
  }
  
  render() {
    
    const { forward, backward, traveler } = this.props;
    const steps = traveler.items.map((_, i) => {
      return <div key={'step-' + i} className={i === traveler.index ? 'step active': 'step'}></div>;
    });
    
    return (
       <div className="time-traveler">
        <button onClick={this.handleShow}>time travel?</button>
        {this.state.show ?
          <div>
            {steps}
            <img src="/images/bttf.jpg" alt="AWW YEAHH!"/>
            <p>States: {steps.length}</p>
            <button onClick={backward}>Back</button>
            <button onClick={forward}>Forward</button>
          </div>
          : ''}
      </div>
    );
  }
}

export default TimeTraveler;