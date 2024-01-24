import { Component } from 'react';
import css from './FeedbackForm.module.css';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  //   'prevState' to aktualny stan komponentu
  // [type] oznacza, że używam wartości zmiennej type jako klucza obiektu, co pozwala mi na dynamiczne określanie, którą właściwość stanu chcę zaktualizować
  handleFeedback = opinion => {
    this.setState(prevState => ({ [opinion]: prevState[opinion] + 1 }));
  };

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
