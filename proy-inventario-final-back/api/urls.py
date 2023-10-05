from rest_framework.routers import DefaultRouter
from django.urls import path

from . import views

router = DefaultRouter()

router.register(r'laboratorio',views.LaboratorioViewset,basename='laboratorio')
router.register(r'equipo',views.EquipoViewset,basename='equipo')
router.register(r'movimiento',views.MovimientoViewset,basename='movimiento')

urlpatterns = router.urls