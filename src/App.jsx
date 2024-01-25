import { Component } from 'react';
import Section from './components/Section.jsx';
import Statistics from 'components/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions.jsx';

export class App extends Component {
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
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <div className="App">
        <Section title="Please leave feedback"></Section>
        <Section title="Feedback Options">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
