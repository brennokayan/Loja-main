from django.contrib import admin

# Register your models here.
from .models import *

@admin.register(Produtos)
class PessoaAdmin(admin.ModelAdmin):
    model = Produtos
    list_display = [f.name for f in Produtos._meta.fields]