import { Component } from 'react';
import css from './FeedbackForm.module.css';
import App from '../App';

class Statistics extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    // wywołuję funkcję i przypisuje jej wynik do zmiennej
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css['statistics-wrapper']}>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <br></br>
        <p>Total: {totalFeedback}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
