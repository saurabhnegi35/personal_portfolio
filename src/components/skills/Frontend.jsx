import React from 'react';
import './Skills.scss';
import VerifiedIcon from '@mui/icons-material/Verified';
import { skillsDataFrontend } from '../../data';

export default function Frontend() {
  return (
    <div>
      <div className="skillsContent left">
        <h3 className="skillsTitle">FrontEnd</h3>
        <div className="skillsBox">
          <div className="skillsGroup">
            {skillsDataFrontend.map((item) => (
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
