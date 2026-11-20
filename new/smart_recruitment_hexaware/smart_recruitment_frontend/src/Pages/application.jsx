import React, { useState } from 'react';

function ApplicantProfile() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    currentCollege: '',
    currentCourse: '',
    educationDetails: {
      course: '',
      institution: '',
      department: '',
      startDate: '',
      endDate: '',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith('educationDetails.')) {
      const [key, subKey] = name.split('.');
      setFormData({
        ...formData,
        [key]: {
          ...formData[key],
          [subKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleEditInfoClick = () => {
    // Handle edit info logic here
    console.log('Edit Info clicked');
  };

  return (
    <div className="applicant-profile">
      <div className="profile-image">
        {/* Add your profile image here */}
      </div>
      <div className="profile-details">
        <h2>Basic Details</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="currentCollege">Current/Latest College:</label>
          <input
            type="text"
            id="currentCollege"
            name="currentCollege"
            value={formData.currentCollege}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentCourse">Current Course:</label>
          <input
            type="text"
            id="currentCourse"
            name="currentCourse"
            value={formData.currentCourse}
            onChange={handleChange}
            required
          />
        </div>
        <h2>Education Details</h2>
        <div className="form-group">
          <label htmlFor="educationDetailsCourse">Current/Most Recent Course:</label>
          <input
            type="text"
            id="educationDetailsCourse"
            name="educationDetails.course"
            value={formData.educationDetails.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationDetailsInstitution">Institution:</label>
          <input
            type="text"
            id="educationDetailsInstitution"
            name="educationDetails.institution"
            value={formData.educationDetails.institution}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationDetailsDepartment">Department:</label>
          <input
            type="text"
            id="educationDetailsDepartment"
            name="educationDetails.department"
            value={formData.educationDetails.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationDetailsStartDate">Start Date:</label>
          <input
            type="date"
            id="educationDetailsStartDate"
            name="educationDetails.startDate"
            value={formData.educationDetails.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationDetailsEndDate">End Date:</label>
          <input
            type="date"
            id="educationDetailsEndDate"
            name="educationDetails.endDate"
            value={formData.educationDetails.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" onClick={handleEditInfoClick}>
          Edit Info
        </button>
      </div>
      <button className="btn btn-secondary">Back to Dashboard</button>
      <button className="btn btn-danger">Log Out</button>
    </div>
  );
}

export default ApplicantProfile;