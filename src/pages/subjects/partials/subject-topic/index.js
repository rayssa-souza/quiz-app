import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SubjectTopic = ({ subject }) => {
  return (
    <Link to={`/${subject.id}/select-difficulty`} className={'subject-link'}>
      <div className="subject-topic">
        <div className="subject-icon">{subject.icon}</div>
        <span>{subject.name}</span>
      </div>
    </Link>
  );
};

export default SubjectTopic;
