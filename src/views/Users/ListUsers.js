import React from "react";
import axios from "axios";
import "./ListUsers.scss";
import { withRouter } from "react-router-dom";

class ListUsers extends React.Component {
  state = {
    ListUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      ListUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetail = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { ListUsers } = this.state;
    console.log("check list users", ListUsers);
    return (
      <>
        <div className="list-users-container">
          <div className="title">Fetch all list users</div>
          <table>
            <tbody>
              <tr>
                <th> </th>
                <th>Email </th>
                <th>Last name</th>
                <th>First name</th>
                <th>Action</th>
              </tr>
              {ListUsers &&
                ListUsers.length > 0 &&
                ListUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>
                        <button
                          className="btn btn-detail"
                          onClick={() => {
                            this.handleViewDetail(item);
                          }}
                          type="button"
                        >
                          View Detail
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default withRouter(ListUsers);
