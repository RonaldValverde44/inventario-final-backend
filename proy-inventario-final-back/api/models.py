from django.db import models

# Create your models here.
class Laboratorio(models.Model):
  descripcion = models.CharField(max_length=200)
  ubicacion = models.CharField(max_length=200)

  class Meta:
    db_table = 'tbl_laboratorio'

  def __str__(self):
    return self.descripcion
  
class Equipo(models.Model):
  CONDICION_CHOICES = (
    (1,'OPERATIVO'),
    (2,'INOPERATIVO')
  )

  codigo = models.CharField(max_length=50)
  descripcion = models.CharField(max_length=200)
  serie = models.CharField(max_length=200)
  modelo = models.CharField(max_length=200)
  marca = models.CharField(max_length=200)
  condicion = models.IntegerField(default=1,choices=CONDICION_CHOICES)

  class Meta:
    db_table = 'tbl_equipo'

  def __str__(self):
    return self.descripcion
  
class Movimiento(models.Model):
  TIPOS_CHOICES = (
    (1,'INGRESO'),
    (2,'SALIDA')
  )

  MOTIVOS_CHOICES = (
    (1,'ASIGNACION'),
    (2,'PRESTAMO'),
    (3,'DEVOLUCION'),
    (4,'BAJA')
  )

  laboratorio = models.ForeignKey(Laboratorio,on_delete=models.RESTRICT)
  equipo = models.ForeignKey(Equipo,on_delete=models.RESTRICT)
  tipo_movimiento = models.IntegerField(default=1,choices=TIPOS_CHOICES)
  motivo = models.IntegerField(default=1,choices=MOTIVOS_CHOICES)
  cantidad = models.IntegerField(default=1)
  fecha = models.DateField(auto_now=True)
  saldo = models.IntegerField(null=True)

  class Meta:
    db_table = 'tbl_movimiento'

  def __str__(self):
    return laboratorio.descripcion + ' - ' + equipo.descripcion