import React from "react";
import Color from "../HOC/color";
import logo from "../../assets/images/xuwithamie.jpg";
import "./Home.scss";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log("check timeout");
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  state = {
    title: "",
    editUser: {},
  };
  handleDeleteUser = (user) => {
    console.log("check user", user);
    this.props.deleteUserRedux(user);
    toast.success("Delete user successfully!");
  };
  handleCreateUser = (user) => {
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }
    this.props.createUserRedux(user);
    console.log("check user handleCreateUser", user);
    this.setState({
      title: "",
    });
    toast.success("Add new user successfully!");
  };
  handleOnChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handleEditUser = (user) => {
    let { editUser } = this.state;
    console.log("editUser", editUser);
    let isEmptyObj = Object.keys(editUser).length === 0;
    //save
    if (isEmptyObj === false && editUser.id === user.id) {
      this.props.editUserRedux(user, editUser);
      this.setState({
        editUser: {},
      });
      return;
    }
    //edit
    this.setState({
      editUser: user,
    });
  };
  handleOnChangeEditUser = (event) => {
    let editUserCopy = { ...this.state.editUser };
    editUserCopy.name = event.target.value;
    this.setState({ editUser: editUserCopy });
  };
  render() {
    console.log("check prop", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    let { title, editUser } = this.state;
    let isEmptyObj = Object.keys(editUser).length === 0;
    console.log("check isEmptyObj", isEmptyObj);
    return (
      <>
        <div>Hello world from HomePage</div>
        <div>
          <img className="logo" src={logo} />
        </div>
        <div>
          <span>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                this.handleOnChangeTitle(event);
              }}
            />
          </span>
          <span>
            <button type="button" onClick={() => this.handleCreateUser(title)}>
              Add new user
            </button>
          </span>
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.name}
                    </span>
                  ) : (
                    <>
                      {editUser.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editUser.name}
                            onChange={(event) => {
                              this.handleOnChangeEditUser(event);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.name}
                        </span>
                      )}
                    </>
                  )}
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        this.handleEditUser(item);
                      }}
                    >
                      {isEmptyObj === false && editUser.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                  </span>
                  <span>
                    <button
                      type="button"
                      onClick={() => this.handleDeleteUser(item)}
                    >
                      x
                    </button>
                  </span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    createUserRedux: (user) => dispatch({ type: "CREATE_USER", payload: user }),
    editUserRedux: (user, editUser) =>
      dispatch({ type: "EDIT_USER", payload: { user, editUser } }),
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
