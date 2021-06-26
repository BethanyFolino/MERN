import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaLinkedIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const EditProfile = ({ 
  profile: { profile, loading }, 
  createProfile, 
  getCurrentProfile, 
  history 
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [
    loading, 
    getCurrentProfile, 
    profile.company, 
    profile.website, 
    profile.location, 
    profile.status, 
    profile.skills, 
    profile.bio,
    profile.social, 
    profile.social.twitter, 
    profile.social.facebook, 
    profile.social.linkedin,
    profile.social.youtube,
    profile.social.instagram
  ]);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  }

  return (
    <Fragment>
        <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Main Occupation</option>
            <option value="Actor">Actor</option>
            <option value="Artist">Artist</option>
            <option value="Choreographer">Choreographer</option>
            <option value="Comedian">Comedian</option>
            <option value="Composer">Composer</option>
            <option value="Dancer">Dancer</option>
            <option value="Director">Director</option>
            <option value="Instructor">Instructor</option>
            <option value="Musician">Musician</option>
            <option value="Photographer">Photographer</option>
            <option value="Producer">Producer</option>
            <option value="Student">Student</option>
            <option value="Writer">Writer</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Tell us about your career!
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
          <small className="form-text">
            Please use comma separated values (eg. acting, directing movies, singing jazz, etc. - feel free to be as specific as you wish)
          </small>
        </div>
        
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && <Fragment>
        <div className="form-group social-input">
          <FaTwitter />
          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <FaFacebook />
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <FaYoutube />
          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <FaLinkedIn />
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <FaInstagram />
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
        </div>
        </Fragment>}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps, 
  { createProfile, getCurrentProfile }
  )(withRouter(EditProfile));