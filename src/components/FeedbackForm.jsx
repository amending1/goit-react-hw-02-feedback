import { Component } from 'react';
import css from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  render() {
    return (
      <div className={css['container-feedback-form']}>
        <h1>Please leave feedback</h1>
      </div>
    );
  }
}

export default FeedbackForm;
