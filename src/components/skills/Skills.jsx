import React from 'react';
import './Skills.scss';
import Frontend from './Frontend';
import Backend from './Backend';

export default function Skills() {
  return (
    <div className="skills " id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle">My Technical Level</span>
      <div className="skillsContainer container grid">
        <Frontend />
        <Backend />
      </div>
    </div>
  );
}
