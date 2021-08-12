from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Produtos(models.Model):

    Nome = models.CharField(max_length=255,blank=False, null=False)
    Quantidade = models.PositiveIntegerField(blank=False, null=False)
    Valor = models.FloatField(validators=[MinValueValidator(0.0)], blank=False, null=False)
    Descricao = models.CharField(max_length=255,blank=False, null=False)
    Link_do_Produto = models.CharField(max_length=255,blank=False, null=False)
    Data = models.DateField(auto_now_add=True,blank=False, null=False)
# Create your models here.
