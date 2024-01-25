import { Component } from 'react';
import css from './FeedbackForm.module.css';

class FeedbackOptions extends Component {
   render() {
    return (
      <div className={css['button-wrapper']}>
        <button
          className={css['button-opinion']}
          onClick={() => this.props.onLeaveFeedback('good')} //Przekazanie funkcji jako props jest sposobem, aby komponent mógł komunikować się z rodzicem. 'good' to argument przekazywany do funkcji handleFeedback
        >
          Good
        </button>
        <button
          className={css['button-opinion']}
          onClick={() => this.props.onLeaveFeedback('neutral')} 
        >
          Neutral
        </button>
        <button
          className={css['button-opinion']}
          onClick={() => this.props.onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
