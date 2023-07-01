import React, { useEffect, useState } from 'react';

const PendingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPendingAppointments();
  }, []);

  const fetchPendingAppointments = async () => {
    try {
      const response = await fetch('http://localhost:8000/pending-appointments/');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.log('Error fetching pending appointments:', error);
    }
  };

  return (
    <div>
      <h2>Pending Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <p>Doctor: {appointment.doctor}</p>
            <p>Patient: {appointment.patient}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingAppointments;
