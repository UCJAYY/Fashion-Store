"use client";

import React, { useState } from "react";

const ProfileBody = () => {
  const [text, setText] = useState(
    "My name is Fazlay Elahi Rafi and I'm a Front-End Developer of #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
  );

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="single-settings-box profile-details-box overflow-hidden">
        <div className="profile-details-tab">
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  <span className="title">Profile</span>
                </a>
              </li>
             
             
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
<form
  action="#"
  className="rbt-profile-row rbt-default-form row row--15"
>
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="gender">Gender</label>
      <select id="gender" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="nonbinary">Non-binary</option>
        <option value="prefer_not_to_say">Prefer not to say</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="age">Age Range</label>
      <select id="age" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="under_18">Under 18</option>
        <option value="18_24">18-24</option>
        <option value="25_34">25-34</option>
        <option value="35_44">35-44</option>
        <option value="45_plus">45+</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="country">Country of Origin</label>
      <select id="country" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="india">India</option>
        <option value="australia">Australia</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="profession">Profession</label>
      <select id="profession" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="business">Business Professional</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="style">Preferred Style</label>
      <select id="style" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
        <option value="athleisure">Athleisure</option>
        <option value="minimalist">Minimalist</option>
        <option value="boho">Boho</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="budget">Budget Range</label>
      <select id="budget" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="occasion">Occasion Types</label>
      <select id="occasion" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="work">Work</option>
        <option value="parties">Parties</option>
        <option value="sports">Sports</option>
        <option value="daily_casual">Daily Casual</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="climate">Climate</label>
      <select id="climate" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="tropical">Tropical</option>
        <option value="temperate">Temperate</option>
        <option value="cold">Cold</option>
        <option value="all_seasons">All Seasons</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="colors">Color Preferences</label>
      <select id="colors" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="form-group">
      <label htmlFor="fit">Body Fit Suggestions</label>
      <select id="fit" defaultValue="Select" style={{ color: 'black' }}>
        <option value="">Select</option>
        <option value="slim_fit">Slim Fit</option>
        <option value="regular_fit">Regular Fit</option>
        <option value="oversized">Oversized</option>
        <option value="plus_size">Plus Size</option>
      </select>
    </div>
  </div>

  <div className="col-12 mt--20">
    <div className="form-group mb--0">
      <button type="submit" className="btn-default">
        Generate Recommendations
      </button>
    </div>
  </div>
</form>




            </div>

            <div
              className="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              
            </div>

            <div
              className="tab-pane fade"
              id="delaccount"
              role="tabpanel"
              aria-labelledby="del-account-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-11 text-Center">
                  <p className="mb--20">
                    <strong>Warning: </strong>Deleting your account will
                    permanently erase all your data and cannot be reversed. This
                    includes your profile, conversations, comments, and any
                    other info linked to your account. Are you sure you want to
                    go ahead with deleting your account? Enter your password to
                    confirm.
                  </p>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="enterpassword">Your Password</label>
                    <input
                      id="enterpassword"
                      type="password"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <a className="btn-default" href="#">
                      <i className="feather-trash-2"></i> Delete Accont
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
