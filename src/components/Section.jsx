import React from 'react';
import css from './FeedbackForm.module.css';

const Section = ({ title, children }) => {
  return (
    <div  className={css['container-feedback-form']}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;