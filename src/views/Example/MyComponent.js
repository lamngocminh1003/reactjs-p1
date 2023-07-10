import React from "react";
import ChildComponent from "./ChildComponents";
import AddComponent from "./AddComponent";
import "./MyComponent.scss";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "1", name: "Tester", salary: "1000" },
      { id: "2", name: "BA", salary: "1500" },
      { id: "3", name: "QA", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    //c1
    let currentJob = this.state.arrJobs;
    currentJob.push(job);
    this.setState({
      arrJobs: currentJob,
    });
    //C2
    // this.setState({
    //   arrJobs: [...this.state.arrJobs, job],
    // });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  render() {
    console.log("check state");
    return (
      <>
        <AddComponent data={this.state} addNewJob={this.addNewJob} />
        <ChildComponent data={this.state} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponent;
