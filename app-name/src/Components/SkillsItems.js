import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function SkillItem({ name, level }) {
  return (
    <div className="row align-items-center mb-3">
      <div className="col-md-3 text-md-end text-start">
        <strong>{name}</strong>
      </div>
      <div className="col-md-9">
        <ProgressBar now={level} label={`${level}%`} />
      </div>
    </div>
  );    
}

export default SkillItem;
