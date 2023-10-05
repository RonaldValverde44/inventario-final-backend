from rest_framework import viewsets

from .models import (
  Laboratorio,
  Equipo,
  Movimiento
)

from .serializers import (
  LaboratorioSerializer,
  EquipoSerializer,
  MovimientoSerializer
)

class LaboratorioViewset(viewsets.ModelViewSet):
  queryset = Laboratorio.objects.all()
  serializer_class = LaboratorioSerializer

class EquipoViewset(viewsets.ModelViewSet):
  queryset = Equipo.objects.all()
  serializer_class = EquipoSerializer

class MovimientoViewset(viewsets.ModelViewSet):
  queryset = Movimiento.objects.all()
  serializer_class = MovimientoSerializer