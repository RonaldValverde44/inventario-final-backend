from rest_framework import serializers

from .models import (
  Laboratorio,
  Equipo,
  Movimiento
)

class LaboratorioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Laboratorio
    fields = '__all__'

class EquipoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Equipo
    fields = '__all__'

class MovimientoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movimiento
    fields = '__all__'