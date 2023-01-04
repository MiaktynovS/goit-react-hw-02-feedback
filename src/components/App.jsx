import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOption } from './FeedbackOptions/FeedbackOp';
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClickBtn = e => {
    const option = e.target.name;
    this.setState(prevState => ({ [option]: prevState[option] + 1 
    })
    );
  };

  countTotalFeedback = () => 
    Number(this.state.good + this.state.neutral + this.state.bad);
  

  countPositiveFeedbackPercentage = () => 
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return(
      <>
      <Section title='Please leave Feedback'>
        <FeedbackOption
        options={Object.keys(this.state)}
        onLeaveFeedback={this.onClickBtn} />

      </Section>
      <Section title='Statistics'>
      {this.countTotalFeedback() > 0 ? (
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentag={this.countPositiveFeedbackPercentage()}
        />
      ) : (<Notification message="There is no feedback" />)}   
      
      </Section>
      </>
    )
  }

}

