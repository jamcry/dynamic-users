import React from "react";
// eslint-disable-next-line no-unused-vars
//import { subscribeToOutputStream } from "../helpers/api";
import { subscribeToOutputStream } from "../helpers/mockApi";
import ProfileDetails from "./ProfileDetails";
import UserList from "./UserList";
import "./Profiles.scss";

class Profiles extends React.Component {
  state = {
    expandedUser: null,
    userList: []
  };

  componentDidMount = () => {
    subscribeToOutputStream((err, data) => {
      this.setState(prevState => ({ 
        userList: [...prevState.userList, data.results[0]],
      }));
    });
  }

  showProfileDetails = (userData) => {
    this.setState({ expandedUser: userData });
  }

  hideProfileDetails = () => {
    this.setState({ expandedUser: null });
  }

  render() {
    // Hide userList container if user profile details is active (i.e. expandedUser exists)
    const userListStyle = { display: (this.state.expandedUser ? "none" : "flex") };

    return (
      <>
        <div className="profiles-container">
          { // Show ProfileDetails page if a user is clicked (expanded)
            this.state.expandedUser &&
            <ProfileDetails
              userData={this.state.expandedUser}
              closeDetails={this.hideProfileDetails}
            />
          }
          <UserList
            userList={this.state.userList}
            handleProfileExpand={this.showProfileDetails}
            style={userListStyle}
          />
        </div>
      </>
    );
  }
}

export default Profiles;
