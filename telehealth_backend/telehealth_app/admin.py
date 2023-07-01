# Register your models here.
from django.contrib import admin
from .models import Doctor, Patient, Consultation, Appointment

admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(Consultation)
admin.site.register(Appointment)
