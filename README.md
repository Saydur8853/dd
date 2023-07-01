# Saydur
Saydur

## Telehealth Backend Service

This is the backend service for a telehealth platform built with Django and Django REST Framework.

### Schema

The schema for the Telehealth platform consists of the following models:

#### Patient


- **name** (CharField)
- **age** (IntegerField)
- **gender** (CharField)
- **contact_info** (CharField)

#### Doctor
- **name** (CharField)
- **specialization** (CharField)
- **availability** (CharField)
- **registration_body** (CharField)
- **registration_number** (CharField)
- **registration_year** (IntegerField)
- **training_course** (CharField)

#### Appointment

- **patient** (ForeignKey to Patient model)
- **doctor** (ForeignKey to Doctor model)
- **appointment_date** (DateTimeField)

#### Consultation

- **patient** (ForeignKey to Patient model)
- **doctor** (ForeignKey to Doctor model)
- **appointment** (OneToOneField to Appointment model)
- **consultation_type** (CharField)
- **consultation_date** (DateTimeField)

### Prerequisites

- Python 3.11
- pip package manager

### Installation

Create and activate a virtual environment:

### On macOS and Linux:
- python3 -m venv venv
- source venv/bin/activate

### On Windows:
- python -m venv venv
- venv\Scripts\activate

### Install the project dependencies:
- pip install -r requirements.txt

### Set up the database:

- python manage.py migrate
### Create a superuser for the Django admin interface:
- python manage.py createsuperuser
### Run the development server:
- python manage.py runserver

### Usage
- API endpoints are available for CRUD operations on patients, doctors, appointments, and consultations:
  - Patients API: `/api/v1/patients/`
  - Doctors API: `/api/v1/doctors/`
  - Appointments API: `/api/v1/appointments/`
  - Consultations API: `/api/v1/consultations/`
