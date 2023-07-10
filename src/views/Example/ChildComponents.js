import React from "react";
import "./MyComponent.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleX = (job) => {
    alert("Do you want to delete");
    this.props.deleteJob(job);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "run componentDidUpdate :",
      "prevProps: ",
      prevProps,
      "prevState: ",
      prevState,
      "current state:",
      this.state,
      "current props: ",
      this.props
    );
  }
  componentDidMount() {
    console.log("run componentDidMount");
  }
  render() {
    let data = this.props.data;
    console.log("check data", data);
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs=true" : "showJobs=false";
    console.log("check condition", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <input
              type="button"
              value="Show"
              className="btn btn-show"
              onClick={() => {
                this.handleShowHide();
              }}
            />
          </div>
        ) : (
          <>
            <div>
              {data.arrJobs.map((item, index) => {
                return (
                  <div key={item.id} className="job-list">
                    {item.name} = {item.salary}{" "}
                    <span
                      className="btn btn-delete"
                      onClick={() => this.handleX(item)}
                    >
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <input
                type="button"
                value="Hide"
                className="btn btn-hide"
                onClick={() => {
                  this.handleShowHide();
                }}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let data = props.data;
//   console.log("check data", data);
//   let a = "";
//   return (
//     <>
//       <div>Hello from ChildComponent : {data.email}</div>
//       <div>Hello from ChildComponent : {data.password}</div>
//       <div>
//         {
//           (a = data.arrJobs.map((item, index) => {
//             if (item.salary > 1000) {
//               return (
//                 <div key={item.id}>
//                   {item.name} = {item.salary} $
//                 </div>
//               );
//             }
//           }))
//         }
//       </div>
//     </>
//   );
// };
export default ChildComponent;
