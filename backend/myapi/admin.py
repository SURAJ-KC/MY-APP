from django.contrib import admin
from django.contrib import admin
from .models import Patient, Consultation, Prescription  # Ensure these exist in models.py

admin.site.register(Patient)
admin.site.register(Consultation)
admin.site.register(Prescription)
# Create your models here.

