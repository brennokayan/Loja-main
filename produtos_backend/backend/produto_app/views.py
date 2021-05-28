from django.shortcuts import render

from rest_framework import viewsets

from .serializer import *

from .models import *

class ProdutosViewSet(viewsets.ModelViewSet):
    serializer_class = ProdutosSerializer
    queryset = Produtos.objects.all()


# Create your views here.
