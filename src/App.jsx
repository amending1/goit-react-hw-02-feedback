import { Component } from 'react';
import FeedbackForm from './components/FeedbackForm.jsx';
import Section from './components/Section.jsx';
import Statistics from 'components/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions.jsx';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Section title="Leave feedback">
        <FeedbackForm />
        </Section>
<Section title="Feedback Options">
         <FeedbackOptions options={} onLeaveFeedback={}/>
         </Section>
        <Section title="Statistics">
        <Statistics good={} neutral={} bad={} total={} positivePercentage={}/>
        </Section>

       
      </div>
    );
  }
}


