import React, { useState } from 'react';
import './style.css';

function Hover() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="Hover">
      <p
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        your daily advice
      </p>
      {isShown && (
        <div>
    this is your daily advice
        </div>
      )}
    </div>
  );
}

export default Hover;