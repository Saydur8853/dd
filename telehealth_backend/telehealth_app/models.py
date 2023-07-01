from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    contact_info = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    availability = models.CharField(max_length=100)
    registration_body = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=100)
    registration_year = models.IntegerField()
    training_course = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Consultation(models.Model):
    CONSULTATION_TYPE_CHOICES = (
        ('initial', 'Initial Consultation'),
        ('follow_up', 'Follow-up'),
    )
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    consultation_type = models.CharField(max_length=20, choices=CONSULTATION_TYPE_CHOICES)
    consultation_date = models.DateTimeField()
    
    def __str__(self):
        return f"{self.patient} - {self.doctor} - {self.consultation_type}"


class Appointment(models.Model):
    consultation = models.OneToOneField(Consultation, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()

    def __str__(self):
        return f"{self.consultation} - {self.appointment_date}"


class Disease(models.Model):
    title = models.CharField(max_length=100)
    summary = models.TextField()
    symptoms = models.TextField()

    def __str__(self):
        return self.title
