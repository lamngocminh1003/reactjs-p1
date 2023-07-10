import React from "react";
import "./AddToDo.scss";
import ViewToDo from "./ViewToDo";
import { toast } from "react-toastify";

class MainComponent extends React.Component {
  state = {
    arrWorks: [
      { id: 1, name: "Doing homework" },
      { id: 2, name: "Making videos" },
      { id: 3, name: "Fixing bugs" },
    ],
    name: "",
    editToDo: {},
  };
  handleToWork = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  addAWork = () => {
    if (!this.state.name) {
      toast.error("Missing required parameters!");
      return;
    }
    let { arrWorks, name } = this.state;
    arrWorks.push({
      id: Math.floor(Math.random() * 1000),
      name: name,
    });
    this.setState({ arrWorks: arrWorks, name: "" });
    toast.success("Add to do successfully!");
  };
  deleteAWork = (name) => {
    let arrWorks = this.state.arrWorks;
    arrWorks = arrWorks.filter((item) => item.id !== name.id);
    this.setState({ arrWorks: arrWorks });
    toast.success("Delete to do successfully!");
  };
  editAWork = (name) => {
    this.setState({
      editToDo: name,
    });
  };
  EditToDo = (editToDoCopy, listToDoCopy) => {
    this.setState({
      editToDo: editToDoCopy,
      arrWorks: listToDoCopy,
    });
  };
  render() {
    return (
      <>
        <div className="add-to-do">
          <input
            type="text"
            className="add-work"
            value={this.state.name}
            onChange={(event) => this.handleToWork(event)}
          />
          <span>
            <input
              type="button"
              value="Add"
              className="btn btn-add "
              onClick={() => this.addAWork()}
            />
          </span>
        </div>
        <ViewToDo
          data={this.state}
          deleteAWork={this.deleteAWork}
          editAWork={this.editAWork}
          EditToDo={this.editToDo}
        />
      </>
    );
  }
}
export default MainComponent;
