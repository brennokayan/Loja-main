# Generated by Django 3.2.3 on 2021-05-28 22:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produto_app', '0003_rename_produto_produtos_link_do_produto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produtos',
            name='Valor',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]
