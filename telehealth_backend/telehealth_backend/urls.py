from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework import routers
from telehealth_app.views import PatientViewSet, DoctorViewSet, AppointmentViewSet, ConsultationViewSet, DiseaseViewSet

router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet, basename='patient')
router.register(r'doctors', DoctorViewSet, basename='doctor')
router.register(r'appointments', AppointmentViewSet, basename='appointment')
router.register(r'consultations', ConsultationViewSet, basename='consultation')
router.register(r'diseases', DiseaseViewSet, basename='diseases')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
]
