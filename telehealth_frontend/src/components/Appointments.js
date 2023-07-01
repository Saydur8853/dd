import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://demo-app.medaicloud.live/api/v1/doctors/get%20upcoming%20appointments', {
          "patients id": "string",
          "consultancy type": "1"
        }, {
          headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg4OTk0OTQ4LCJqdGkiOiIzMGNkN2E3OTQwOTY0MWE4OTczZGJlNmZlMmYzZDQ4OSIsInVzZXJfaWQiOjF9.m_8N9-Xh0TLGVSzJETSHsbU9quWwpy00ebp0zesV5YgEuFCybaCs1fnF2zSaoSVvvF2d38An_R2LlFPEFZpo2A',
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            Patient ID: {appointment.consultation.patient}
            <br />
            Doctor ID: {appointment.consultation.doctor}
            <br />
            Appointment DateTime: {appointment.appointment_datetime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
