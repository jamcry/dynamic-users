import React from "react";
import "./ProfileDetails.css";

class ProfileDetails extends React.Component {
  render() {
    const { userData } = this.props;
    const fullName = userData.name.first + " " + userData.name.last;
    const imageUrl = userData.picture.medium;
    const gender = userData.gender;
    const coordinates = userData.location.coordinates;
    const age = userData.dob.age;

    const genderIconClass = "fas fa-" + ((gender === "male") ? "mars" : "venus");

    return (
      <>
        <div className="page-header profile-page">
          <div className="btn-back" onClick={this.props.closeDetails}><i className="fas fa-long-arrow-alt-left" /></div>
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
            <p>{"Latitude: " + coordinates.latitude + ", Longitude: " + coordinates.longitude}</p>
          </div>

          <div className="bottom-details">
            <div className="gender">
              <div className="subtitle">Gender</div>
              <div className="subcontent">
                <div className="gender-icon"><i className={genderIconClass} /></div>
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
