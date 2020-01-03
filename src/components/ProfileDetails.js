import React from "react";
import sampleData from "../helpers/sampleData";
import "./ProfileDetails.css";

class ProfileDetails extends React.Component {
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
    const {
      fullName,
      imageUrl,
      gender,
      coordinates,
      age
    } = this.handleIncomingData(this.state.data);

    return (
      <>
        <div className="page-header profile-page">
          <div className="btn-back">{"<"}</div>
          <div className="page-title">MY PROFILE</div>
        </div>
        <div className="profile-details">
          <div className="profile-card">
            <div className="profile-photo-container-big">
              <img src={imageUrl} alt="profile" />
            </div>
            <div className="name-container">
              <div className="user-fullname-title">
                <span>Name</span>
              </div>
              <div className="user-fullname">
                <span>{fullName}</span>
              </div>
            </div>
          </div>

          <div className="map-container">
            <p>Map View</p>
          </div>

          <div className="bottom-details">
            <div className="gender">
              <div className="subtitle">Gender</div>
              <div className="subcontent">
                <div className="gender-icon">{gender[0].toUpperCase()}</div>
              </div>
            </div>
            <div className="age">
              <div className="subtitle">Age</div>
              <div className="subcontent">
                <div className="age-yo-container">{age} yo</div>
              </div>
              <div className="age-rectangle">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileDetails;
