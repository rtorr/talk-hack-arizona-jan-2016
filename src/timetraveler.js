import React from 'react';
import './styles/time.css';

export function TimeTraveler (backward, forward) {
  return (
     <div className="time-traveler">
      <img src="/images/bttf.jpg" alt="AWW YEAHH!"/>
      <button onClick={backward}>Back</button>
      <button onClick={forward}>Forward</button>
    </div>
  );
}
