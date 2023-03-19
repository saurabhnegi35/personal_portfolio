import React from 'react';
import './Skills.scss';
import VerifiedIcon from '@mui/icons-material/Verified';
import { skillsDataBackend } from '../../data';

export default function Backend() {
  return (
    <div>
      <div className="skillsContent right">
        <h3 className="skillsTitle">BackEnd</h3>
        <div className="skillsBox">
          <div className="skillsGroup">
            {skillsDataBackend.map((item) => (
              <div className="skillsData">
                <VerifiedIcon className="icon" />
                <div className="skillsCard">
                  <h3 className="skillsName">{item.skill}</h3>
                  <span className="skillsLevel">{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
