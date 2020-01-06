import React from "react";

import "./ProfileDetails.scss";
import { MapView } from "./EmbeddedMap";

class ProfileDetails extends React.Component {
  render() {
    const { userData } = this.props;
    const fullName = userData.name.first + " " + userData.name.last;
    const imageUrl = userData.picture.large;
    const gender = userData.gender;
    const coordinates = userData.location.coordinates;
    const age = userData.dob.age;

    // Assign gender icon class name according to the gender
    const genderIconClass = "fas fa-" + ((gender === "male") ? "mars" : "venus");

    return (
      <>
        <div className="page-header profile-page">
          <div className="btn-back" onClick={this.props.closeDetails}>
            <i className="fas fa-long-arrow-alt-left" />
          </div>
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
            <MapView
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDujxhi5-1RAq9jizZ5U2xp0hikKwOFQKE&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ width: `100%` }} />}
              mapElement={<div style={{ height: `100%`, borderRadius: '10px' }} />}
              position={coordinates}
            />
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
