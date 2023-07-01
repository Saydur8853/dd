import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demo-app.medaicloud.live/api/v1/all%20user/get%20doctor%20list', {
          headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg4OTk0OTQ4LCJqdGkiOiIzMGNkN2E3OTQwOTY0MWE4OTczZGJlNmZlMmYzZDQ4OSIsInVzZXJfaWQiOjF9.m_8N9-Xh0TLGVSzJETSHsbU9quWwpy00ebp0zesV5YgEuFCybaCs1fnF2zSaoSVvvF2d38An_R2LlFPEFZpo2A',
          },
        });
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>{doctor.name}</strong>
            <br />
            Specialization: {doctor.specialization}
          </li>
        ))}
      </ul>
      <Link to="/appointments">View Appointments</Link>
    </div>
  );
};

export default DoctorList;
