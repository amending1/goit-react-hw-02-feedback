import { Component } from 'react';
import css from './FeedbackForm.module.css';

class FeedbackOptions extends Component {
   render() {
    return (
      <div className={css['button-wrapper']}>
        <button
          className={css['button-opinion']}
          onClick={() => this.handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={css['button-opinion']}
          onClick={() => this.handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css['button-opinion']}
          onClick={() => this.handleFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
