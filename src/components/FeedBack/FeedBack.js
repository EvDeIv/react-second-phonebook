import PropTypes from "prop-types";
import { Component } from "react";
import Notification from "../Notification/Notification";
import Button from "./../Button/Button";
import Statistic from "./../Statistic/Statistic";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (feedbackType) => {
    this.setState((state) => {
      return {
        [feedbackType]: (state[feedbackType] += 1),
      };
    });
  };

  countTotal = () => {
    return Object.values(this.state).reduce((a, b) => a + b);
  };

  countPositive = () => {
    return +((this.state.good / this.countTotal()) * 100).toFixed(2);
  };
  render() {
    return (
      <>
        <h2 className="text-xl font-bold">Please leave feedback</h2>
        <Button feedbackType={"good"} addFeedback={this.addFeedback}></Button>
        <Button
          feedbackType={"neutral"}
          addFeedback={this.addFeedback}
        ></Button>
        <Button feedbackType={"bad"} addFeedback={this.addFeedback}></Button>
        {this.countTotal() > 0 ? (
          <Statistic
            stats={this.state}
            countTotal={this.countTotal}
            countPositive={this.countPositive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default FeedBack;
