import React from "react";
// eslint-disable-next-line no-unused-vars
import { subscribeToOutputStream } from "../helpers/api";
import { sampleData, sampleData2 } from "../helpers/sampleData";
import ProfileDetails from "./ProfileDetails";
import UserList from "./UserList";
import "./Profiles.css";

class Profiles extends React.Component {
  constructor(props) {
    super(props);

    /*
    subscribeToOutputStream((err, data) => {
      this.setState({ data });
    });
   */

    this.state = {
      expandedUser: null,
      // Use sample (mockup) data
      userList: [sampleData.results[0], sampleData2.results[0]]
    };
  }

  handleProfileExpand = (userData) => {
    this.setState({
      expandedUser: userData
    })
  }

  render() {
    const { expandedUser } = this.state;
    const userListStyle = {
      display: (expandedUser ? "none" : "block")
    }

    return (
      <>
        <div className="profile-list-container">
          {this.state.expandedUser &&
            <ProfileDetails
              userData={this.state.expandedUser}
              closeDetails={() => this.handleProfileExpand(null)}
            />
          }
          <UserList
            userList={this.state.userList}
            handleProfileExpand={this.handleProfileExpand}
            style={userListStyle}
          />
        </div>
      </>
    );
  }
}

export default Profiles;
