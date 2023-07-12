import React from 'react';
import { useState } from 'react';
import Button from '../../../../components/button';
import {
  TbMoodAnnoyed,
  TbMoodTongueWink2,
  TbMoodNeutral,
  TbMoodSmileBeam,
  TbMoodHappy
} from 'react-icons/tb';
import { IoRefresh } from 'react-icons/io5';
import { TfiExchangeVertical, TfiArrowLeft } from 'react-icons/tfi';

import './style.scss';

const getResult = (score) => {
  if (score === 0) {
    return 'Failed';
  }
  if (score >= 1 && score <= 4) {
    return 'Bad';
  }
  if (score === 5 || score === 6) {
    return 'NotBad';
  }
  if (score === 7 || score === 8) {
    return 'GoodJob';
  }
  if (score === 9 || score === 10) {
    return 'Excellent';
  }
};

const resultIcon = {
  Failed: <TbMoodTongueWink2 color={'86608E'} />,
  Bad: <TbMoodAnnoyed color={'86608E'} />,
  NotBad: <TbMoodNeutral color={'86608E'} />,
  GoodJob: <TbMoodSmileBeam color={'86608E'} />,
  Excellent: <TbMoodHappy color={'86608E'} />
};

const resultMessage = {
  Failed: "Oh! Don't worry...That happens in the best of families.",
  Bad: 'Chin up! You can do it!',
  NotBad: 'Not bad but you can do better.',
  GoodJob: 'Good Job!',
  Excellent: 'Whow! You aced it!'
};

const ResultsPage = ({ score, resetScore, changeDifficulty, changeSubject }) => {
  const [result] = useState(getResult(score));

  return (
    <div className="results-page">
      <p className="results-page-score">
        You scored <span className="results-page-span">{score}/10 </span>
      </p>
      <div className="results-page-icon">{resultIcon[result]}</div>
      <span className="results-page-message">{resultMessage[result]}</span>
      <Button text={'Try again!'} icon={<IoRefresh />} onClick={() => resetScore()} />
      <Button
        text={'Change difficulty'}
        icon={<TfiExchangeVertical />}
        onClick={() => changeDifficulty()}
      />
      <Button
        text={'Change subject'}
        icon={<TfiArrowLeft size={'0.8em'} />}
        onClick={() => changeSubject()}
      />
    </div>
  );
};

export default ResultsPage;
