import { useState } from "react";
import Container from 'components/Container';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from "components/Section";
import Statistics from "components/Statistics";
import Notification from "components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;


    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
         default:
  return;
        }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
  
    const total = countTotalFeedback();
    const positiveFeedback = Math.round(good * 100 / total);
    return !positiveFeedback ? 0 : positiveFeedback;
  }

 
    const total = countTotalFeedback();

    return(
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']}  onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        
        <Section title="Statistics">
          {total > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}></Statistics> : <Notification message="There is no feedback"></Notification>}
        </Section>
   </Container >
  )
}

export default App;
