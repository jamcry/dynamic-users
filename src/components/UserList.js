import React from "react";
import { subscribeToOutputStream } from "../helpers/api";
import sampleData from "../helpers/sampleData";
import "./UserList.css";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    /*
    subscribeToOutputStream((err, data) => {
      this.setState({ data });
    });
   */

    this.state = {
      // Use sample (mockup) data
      data: sampleData
    };
  }

  handleIncomingData = data => {
    const profile = data.results[0];
    return {
      fullName: profile.name.first + " " + profile.name.last,
      imageUrl: profile.picture.medium,
      gender: profile.gender,
      coordinates: profile.location.coordinates,
      age: profile.dob.age
    };
  };

  render() {
    const { fullName, age, imageUrl } = this.handleIncomingData(
      this.state.data
    );

    return (
      <>
        <div className="page-header">
          <div className="page-title">PROFILES</div>
          <div className="btn-burger">E</div>
        </div>
        <div className="profile-list-item">
          <div className="profile-photo-container">
            <img src={imageUrl} alt="profile" />
          </div>
          <div className="user-fullname">
            <span>
              {fullName}, {age}
            </span>
          </div>
          <div className="profile-action">></div>
        </div>
      </>
    );
  }
}

export default UserList;
