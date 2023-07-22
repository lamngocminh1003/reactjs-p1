import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "./DetailUser.scss";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({ user: res && res.data ? res.data.data : {} });
      console.log("check res", res);
    }
  }
  handleBackListUsers = () => {
    this.props.history.push(`/user`);
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    console.log("check props", this.props);
    return (
      <>
        <div>Hello from detail user with id: {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name: {user.first_name} {user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button
                onClick={() => this.handleBackListUsers()}
                className="btn btn-back"
                type="button"
              >
                Back to list user
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
