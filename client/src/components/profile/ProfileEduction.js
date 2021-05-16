import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/formatDate";

const ProfileEducation = ({
  experience: { school, degree, fieldofstudy, current, to, from, description }
}) => <div>
    <h3 className="text-dark">{school}</h3>
    <p>
    {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>;


ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;